import React, { Component } from 'react';
import './startbutton.css';

class StartButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div 
            className="start-button"
            onClick={this.props.dropCircles}
            >START</div>
        )
    }
}

export default StartButton;