import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Circle from './Components/Circle/circle';
import StartButton from './Components/StartButton/startbutton';

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
// </div>

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
        units: 'em',
        circles: [],
        circlesCount: declarativeLoop(4),
    }   
    
    this.dropCircles = this.dropCircles.bind(this);


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
      setInterval(() => {
        this.setState((prevState) => {
            // console.log(prevState)
            return {top: prevState.top += 1}
        })
        console.log(this.state)
        // console.log('inside setInterval?')

      }, 500)

  }


}

export default App;
