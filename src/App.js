import React, { Component } from 'react';
import * as autoBind from 'auto-bind';


import './App.css';
import Circle from './Components/Circle/circle';
import StartButton from './Components/StartButton/startbutton';

class App extends Component {
  constructor(props) {
    super(props);

    const declarativeLoop = (num) => {
      let arr = [];
      for (let i = 1; i <= num; i++) {
        arr.push(i);
      }
      return arr;
    }

    this.state = {
        top: 0,
        units: 'px',
        circles: [],
        circlesCount: declarativeLoop(4),
    }   
    
    autoBind(this);
    // this.dropCircles = this.dropCircles.bind(this);
  }
  render() {
    return (
      <div className="App circle-game">
        { this.state.circlesCount.map((num, i) => (
            <Circle top={this.state.top + this.state.units} key={i}/>
          )
        )}
        <StartButton 
          dropCircles={this.dropCircles}
        />
      </div>
    );
  }

  

  dropCircles() {

    for (let i = 0; i <= 5; i++) {
      
      //TODO: change to setInterval
      const _dropCircles = setInterval (() => {
    
        this.setState((prevState) => {
            // console.log(prevState)
            return {top: prevState.top += 1}
        })
        // count++;
        // console.log(this.state)
        // console.log('inside setInterval?')
      }, 100)
    }

  }


}

export default App;
