import React from 'react';
import ultraSound from '../images/test-ultrasound.jpg'

export default function GirlBox(props) {
    return(
        <div className={props.style}>
            <div className={props.girlSidePic}>
                <img src={ultraSound} alt="reveal"/>
            </div>
            <h1>Girl?</h1>
            <div className={ props.girlSideYup }>
                <h1>Yup</h1>
            </div>
        </div>
    )
}