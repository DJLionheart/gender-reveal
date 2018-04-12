import React from 'react';

export default function RevealButton(props) {
    return(
        <div onClick={function(event){ props.func(); setTimeout( () => props.func2(), 11000) }}
             className={ props.style } >
            <h1>Click to reveal...</h1>
        </div>
    )
}