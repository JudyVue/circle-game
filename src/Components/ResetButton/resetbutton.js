import React, { Component } from 'react';
import './resetbutton.css';

export default class ResetButton extends Component {
    render() {
        return (
            <div className="reset-button"
            onClick={this.props.resetCircles}
            tabIndex={2}
            >
            <a>RESET</a>
            </div>
        )
    }
}