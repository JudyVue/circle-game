import React, { Component } from 'react';
import './circle.css';



class Circle extends Component {
    constructor(props) {
        super(props);
        this.styles = {
            position: 'relative',
            top: this.props.top,
        }
    }
    render() {
        return (
            <div 
            className="circle"
            style={this.styles}
            draggable="true"
            >  
            </div>
        )
    }
}

export default Circle;