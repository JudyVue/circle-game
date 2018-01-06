import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Circle from './Components/Circle/circle'

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

    this.state = {
        top: `${0}em`,
    }
    

  }
  render() {
    return (
      <div className="circle-game">
        <Circle 
        top={this.state.top}
        />
        <h1>Hello World, this is my circle game</h1>
      </div>
    );
  }
}

export default App;
