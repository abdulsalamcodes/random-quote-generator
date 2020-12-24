import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Quote from './component/QuoteCard';
import axios from 'axios';
import Spinner from './component/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SingleAuthorQuote from './component/SingleAuthorQuote';


function App() {
  // Initialize animate on scroll library.
  AOS.init();

  // Declare all states.
  const [isLoading, setLoading] = useState(true);
  const [quote, setData] = useState({});
  const [getAuthorQuotes, setGetAuthorQuotes] = useState(false);
  const [quotes, setQuotes] = useState([]);

  // Fetch data from Endpoins
  const fetchItem = async () => {
    setLoading(true)
    const { data } = await axios(`https://quote-garden.herokuapp.com/api/v3/quotes/random`);
    setLoading(false)
    setData(data.data[0]);
  }

  // Fetch on render.
  useEffect(() => {
    fetchItem()
  }, [])


  // Generate New Random Posts from a random Author
  function generateQuote() {
    setGetAuthorQuotes(false)
    fetchItem()
  }

  // Get All posts from the Author.
  function getArrayOfQuote(author) {
    setLoading(true)
    const fetchItem = async () => {
      const { data } = await axios(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${author}`);
      let quotes = data.data
      setLoading(false)
      setGetAuthorQuotes(true);
      setQuotes(quotes)
    }

    fetchItem();
  }

  // Displaying A Random Post : Check if loading then display
  const randomQuote = (isLoading
    ? <Spinner />
    : <Quote key={quote._id}
      content={quote.quoteText}
      author={quote.quoteAuthor}
      genre={quote.quoteGenre}
      onClick={isLoading ? <Spinner /> : () => getArrayOfQuote(quote.quoteAuthor)}
    />)


  // Displaying Lists of Posts from the Author: Check if loading then display
  const listOfQuotes = (isLoading
    ? <Spinner />
    : <SingleAuthorQuote quotes={quotes} quote={quote}
    />);

  return (
    <div>
      <Header onClick={generateQuote} />
      <main className="container">
        {getAuthorQuotes ? listOfQuotes : randomQuote}
      </main>
    </div>
  );
}

export default App;
