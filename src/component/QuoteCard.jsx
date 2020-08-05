import React from 'react';
import ArrowRightAltIcon  from '@material-ui/icons/ArrowRightAlt';


function quote(props) {
    return (
            <blockquote className="card" >

                <div className="card-content">
                    <p>{props.content}</p>
                </div>

                <footer className="card-footer" onClick={props.onClick}>
                    <div>
                        <cite className="author"> <strong>{props.author}</strong> </cite>
                        <span className="genre">{props.genre}</span>
                    </div>
                    <ArrowRightAltIcon className="arrow-icon" />
                </footer>
            </blockquote> 
    )
}

export default quote;
