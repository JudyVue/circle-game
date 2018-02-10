import React, { Component } from 'react';
import * as autoBind from 'auto-bind';

// css
import './App.css';

//components
import Circle from './Components/Circle/circle';
import StartButton from './Components/StartButton/startbutton';
import ResetButton from './Components/ResetButton/resetbutton';

class App extends Component {
  constructor(props) {
    super(props);

    const _declarativeLoop = (num) => {
      let arr = [];
      for (let i = 1; i <= num; i++) {
        arr.push(i);
      }
      return arr;
    }

    this._dropCircles = null;
    this._circlesCount = 5;
    this.minSpeed = 10;
    this.maxSpeed = 100;

    this.state = {
        top: 0,
        // units: 'px',
        circlesCount: _declarativeLoop(this._circlesCount),
        circleSpeeds: this.setRandomSpeeds(this.minSpeed, this.maxSpeed),
        resetCircle: false,
        shouldCirclesFall: false,
    }   
    
    autoBind(this);
  }
  render() {
    return (
      <div className="App circle-game">
        { this.state.circlesCount.map((num, i) => (
            <Circle 
              top={this.state.top} key={i}
              fallingSpeed={this.state.circleSpeeds[i]}
              resetCircle={this.state.resetCircle}
              shouldCircleFall={this.state.shouldCirclesFall}
            />
          )
        )}
        <StartButton 
          dropCircles={this.dropCircles}
        />
        <ResetButton 
          resetCircles={this.resetCircles}
        />
      </div>
    );
  }

  setRandomSpeeds(min, max) {
    let arr = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    for (let i = 0; i < this._circlesCount; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return arr;
  }

  resetCircles() {
    this.setState({
      top: 0,
      circleSpeeds: this.setRandomSpeeds(this.minSpeed, this.maxSpeed),
      resetCircle: true,
      shouldCirclesFall: false,
    })
    this.resetCircleSpeeds();
    console.log(this.state, 'what is state on reset')
    // clearInterval(this._dropCircles)
  }

  resetCircleSpeeds() {
    this.state.circleSpeeds.map(speed => {
      return this.setState({
          fallingSpeed: speed,
      })
     })
  }

  dropCircles(event) {
    if (this.state.shouldCirclesFall) {
      event.preventDefault();
    } else {
      console.log(this.state, 'this.state on start')
     this.setState({
         shouldCirclesFall: true,
         resetCircle: false,
     })
     this.resetCircleSpeeds();
    }
  }


}

export default App;
