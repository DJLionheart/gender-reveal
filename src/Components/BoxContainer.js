import React, { Component } from 'react';

import BoyBox from './BoyBox';
import GirlBox from './GirlBox';
import RevealButton from './RevealButton';


class BoxContainer extends Component {
    constructor() {
        super();
        this.state = {
            gender: 'boy',
            boyStyle: 'boy-box',
            boyTextStyle: 'regular',
            boySideYup: 'boy-side-yup',
            boySidePic: 'picture-box-boySide',
            girlStyle: 'girl-box',
            girlSideYup: 'girl-side-yup',
            girlSidePic: 'picture-box-girlSide',
            girlTextStyle: 'regular',
            buttonClicked: false,
            buttonStyle: 'button'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleClick() {
        const { gender } = this.state;

        switch( gender ) {
            case 'girl':
                this.setState({
                    boyStyle: 'boy-box-pink',
                    buttonStyle: 'invisible',
                    buttonClicked: true
                })
                break;
            
            case 'boy':
                this.setState({
                    girlStyle: 'girl-box-blue',
                    buttonStyle: 'invisible',
                    buttonClicked: true
                })
                // setTimeout(this.setState({
            
                // }), 20000)
                break;

            default: this.setState({
                boyStyle: 'boy-box-pink',
                buttonStyle: 'invisible',
                buttonClicked: true
            })
            break;
        }
    }

    handleColorChange() {
        const { gender } = this.state;

        switch( gender ) {
            case 'girl': 
                this.setState({
                    boySideYup: 'gender-revealed',
                    boySidePic: 'gender-reveal-girl'
                });
            break;

            case 'boy': 
                this.setState({
                    girlSideYup: 'gender-revealed',
                    girlSidePic: 'gender-reveal-boy'
                });
                break;

            default: this.setState({
                boySideYup: 'gender-revealed',
                boySidePic: 'gender-reveal-girl'
            });
        break;
        }

    }

    render() {
        const { boyStyle, boySideYup, boySidePic, girlStyle, girlSideYup, girlSidePic } = this.state;
        return(
            <div className="box-page">
                <BoyBox style={ boyStyle }
                boySideYup={ boySideYup }
                boySidePic={ boySidePic }/>
                <GirlBox style={ girlStyle }
                girlSideYup={ girlSideYup }
                girlSidePic={ girlSidePic }/>
                <RevealButton func={ this.handleClick }
                func2={ this.handleColorChange }
                style={ this.state.buttonStyle }/>
            </div>
        )
    }
}



export default BoxContainer;