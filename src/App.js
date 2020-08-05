import React,{ useState, useEffect }  from 'react';
import './App.css';
import Header from './component/Header';
import Quote from './component/QuoteCard';
import Singlequote from './component/author-quote'
import axios from 'axios';
import Spinner from './component/Spinner'

function App() {

  const [isLoading, setLoading] = useState(true);
  const [quote, setData] = useState({});

  const [isClicked, setClicked] = useState(false);
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {
    const fetchItem = async () => { 
    const {data} = await axios(`https://quote-garden.herokuapp.com/api/v2/quotes/random`);
    
      setData(data.quote);
      setLoading(false)
    }

    fetchItem()
  }, [])


  function generatequote() {
    const fetchItem = async () => {
      const {data} = await axios(`https://quote-garden.herokuapp.com/api/v2/quotes/random`);

      setClicked(false)
      setData(data.quote);
      setLoading(false)
    }
    fetchItem()
  }

  function getArrayOfQuote(author) {
    const fetchItem = async () => {
      const { data } = await axios(`https://quote-garden.herokuapp.com/api/v2/authors/${author}?limit=25`);
      console.log(data.quotes);

      setQuotes(data.quotes)
      setClicked(true); 
      setLoading(false)
    }
    fetchItem();
  }

  return (
    <div>
      <Header onClick={generatequote} />
      <main className="container">

          {!isClicked && (isLoading ? <Spinner /> : <Quote 
            key={quote.id}
            content={quote.quoteText} 
            author={quote.quoteAuthor}
            genre={quote.quoteGenre}
            onClick={()=> getArrayOfQuote(quote.quoteAuthor)}
        />)}

        {isClicked && (isLoading ? <Spinner /> : <div className="single-quote">
            {quotes.map(quote => <Singlequote key={quote._id} content={quote.quoteText} /> )}
            <span className="quote__author">-{quote.quoteAuthor}</span>
          </div>) } 

      </main>
   
    </div>
  );
}

export default App;
