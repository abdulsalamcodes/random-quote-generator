import React from 'react';
import spinner from "../img/spinner.gif";
const customStyle = {
    width: "200px",
    margin: "auto",
    display: "block"

}
const Spinner = () => {
    return (
       <img src={spinner} alt="loading" style={customStyle}/>
    )
}

export default Spinner;