import React from 'react';
import "../App.css";

function Greetings({title, message}) {
    return (
        <div className={"card"}>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
}

export default Greetings;