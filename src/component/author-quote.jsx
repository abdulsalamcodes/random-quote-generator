import React from 'react'

function authorQuote(props) {
    return (
        <div className="single-card" key={props.id}>
        <blockquote className="card">
            <div className="card-content">
                <p>{props.content}</p>
            </div>
        </blockquote> 
    </div>
    )
}

export default authorQuote;
