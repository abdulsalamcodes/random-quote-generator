import React from 'react'
import SingleQuote from './author-quote'
import ArrowRightAltIcon  from '@material-ui/icons/ArrowRightAlt';

function SingleAuthorQuote(props) {
    return (
        <div>
            <div className="single-quote" >
                {props.quotes.map(quote => <SingleQuote key={quote._id} content={quote.quoteText} />)}
                <span className="quote__author"><ArrowRightAltIcon /> {props.quote.quoteAuthor}</span>
            </div>
        </div>
    )
}

export default SingleAuthorQuote
