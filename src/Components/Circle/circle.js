import React, { Component } from 'react';
import * as autoBind from 'auto-bind';

import './circle.css';



class Circle extends Component {
    constructor(props) {
        super(props);
        this._dropCircle = null;
        this.state = {
            top: this.props.top,
            fallingSpeed: this.props.fallingSpeed,
            resetCircle: this.props.resetCircle,
            shouldCircleFall: this.props.shouldCirclesFall,
            bgColor: this.props.bgColor,
        }

        autoBind(this);

    }

 



    setNewSpeedProps(nextProps) {
        // console.log(nextProps, 'what are nextProps')
        if (nextProps.fallingSpeed !== this.props.fallingSpeed)
        this.setState({
            fallingSpeed: nextProps.fallingSpeed,
        })
    }

  

    dropCircle(nextProps) {
        console.log(nextProps, 'inside dropCircle')
        if (nextProps.shouldCircleFall) {
            let newTop = nextProps.top;
            // console.log(newTop, 'whatw')
            this._dropCircle = setInterval(() => {
               this.setState({
                    top: newTop += 1,
               })
            }, this.state.fallingSpeed)
        }
    }
    checkForResetButtonClick(nextProps) {
        if (nextProps.resetCircle) {
            // console.log('in here?', nextProps)
            clearInterval(this._dropCircle);
            this.setState({
                top: nextProps.top,
            })
           
        }
    }

    setNewBgColors(nextProps) {

    }

    componentWillReceiveProps(nextProps) {
        this.setNewSpeedProps(nextProps);
        this.dropCircle(nextProps);
        this.checkForResetButtonClick(nextProps);
    }

    render() {
        return (
            <div 
            className="circle"
            style={{ 
                position: 'relative', 
                top: this.state.top,
                backgroundColor: this.state.bgColor,
                }}
            speed={this.state.fallingSpeed}
            >
            {this.state.fallingSpeed}
            </div>
        )
    }
}

export default Circle;