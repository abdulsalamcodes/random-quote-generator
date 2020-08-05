import React from 'react'
// import AOS from 'aos';


function authorQuote(props) {
    // AOS.init();

    return (
        <div className="single-card" key={props.id} data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-delay="300">
        <blockquote className="card">
            <div className="card-content">
                <p>{props.content}</p>
            </div>
        </blockquote> 
    </div>
    )
}

export default authorQuote;
