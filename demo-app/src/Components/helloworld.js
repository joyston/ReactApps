import React from 'react'

export default function Helloworld(props) {

    const greeting = "Welcome to React!";
    const number = 30;
    const link = "http://www.google.com";

    return (
        <div style={{ backgroundColor: 'red', padding: '10px' }}>
            <h1>Helloworld</h1>
            <p>{greeting} </p>
            <p>Number value is {number} </p>
            <p>Number added to Number is {number + number} </p>
            <a href={link}>Go to Google</a>
            <p>Received Number from parent: {props.numberProps} </p>
            <div className='call-app-css'>Call App css class</div>
        </div>

    )
}

