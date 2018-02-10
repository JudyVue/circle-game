import React, { Component } from 'react';
import './startbutton.css';

class StartButton extends Component {
    render() {
        return (
            <div 
            className="start-button"
            onClick={this.props.dropCircles}
            tabIndex={1}
            ><a>START</a></div>
        )
    }
}

export default StartButton;