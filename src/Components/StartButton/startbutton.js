import React, { Component } from 'react';
import './startbutton.css';

class StartButton extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        // this.dropCircles = this.dropCircles.bind(this);
    }

    render() {
        return (
            <div 
            className="start-button"
            onClick={this.props.dropCircles}
            >START</div>
        )
    }

    // dropCircles(e) {
        
    // }

    
}

export default StartButton;