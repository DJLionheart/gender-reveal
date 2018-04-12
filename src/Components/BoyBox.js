import React from 'react';
import ultraSound from '../images/test-ultrasound.jpg';

export default function BoyBox(props) {
    return(
        <div className={props.style}>
            <div className={props.boySidePic}>
                <img src={ultraSound} alt="reveal"/>
            </div>
            <h1>Boy?</h1>
            <div className={ props.boySideYup }>
                <h1>Yup</h1>
            </div>
        </div>
    )
}