import React, { Component } from 'react';
import './circle.css';



class Circle extends Component {
    constructor(props) {
        super(props);
        let styles = {
            position: 'relative',
            top: this.props.top,
        }

        this.state = {
            styles,
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, 'what are nextprops')
        // debugger
        if (nextProps.top > this.props.top) {
            this.setState({
                styles: {
                    position: 'relative',
                    top: nextProps.top,
                }
            })
        }
        console.log(this.state)

    }
    render() {
        return (
            <div 
            className="circle"
            style={this.state.styles}
            draggable="true"
            >  
            </div>
        )
    }
}

export default Circle;