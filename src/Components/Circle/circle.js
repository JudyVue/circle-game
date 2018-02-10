import React, { Component } from 'react';
import * as autoBind from 'auto-bind';

import './circle.css';



class Circle extends Component {
    constructor(props) {
        super(props);
        let styles = {
            position: 'relative',
            top: this.props.top,
        }

        this._dropCircle = null;

        this.state = {
            styles,
            fallingSpeed: this.props.fallingSpeed,
            resetCircle: this.props.resetCircle,
            shouldCircleFall: this.props.shouldCirclesFall,
        }

        autoBind(this);

    }

    checkForResetButtonClick(nextProps) {
        if (nextProps.resetCircle) {
            console.log('in here?', nextProps)
            clearInterval(this._dropCircle);
            this.setState({
                styles: {
                    position: 'relative',
                    top: nextProps.top,
                }
            })
           
        }
    }

    checkForSpeedProps(nextProps) {
        // console.log(nextProps, 'what are nextProps')
        if (nextProps.fallingSpeed !== this.props.fallingSpeed)
        this.setState({
            fallingSpeed: nextProps.fallingSpeed,
        })
    }

  

    dropCircle(nextProps) {
        console.log(nextProps, 'inside dropCircle')
        if (nextProps.shouldCircleFall) {
            console.log('hello')
            let newTop = nextProps.top;
            this._dropCircle = setInterval(() => {
               this.setState(prevState => {
                   return {
                       styles: {
                           position: 'relative',
                           top: newTop += 1,
                       }
                   }
               })
            }, this.state.fallingSpeed)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.checkForSpeedProps(nextProps);
        this.dropCircle(nextProps);
        this.checkForResetButtonClick(nextProps);
    }

    render() {
        return (
            <div 
            className="circle"
            style={this.state.styles}
            speed={this.state.fallingSpeed}
            >
            {this.state.fallingSpeed}
            </div>
        )
    }
}

export default Circle;