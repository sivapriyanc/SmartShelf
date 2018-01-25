import React, { Component } from 'react';
import Timer from 'react.timer'
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Aisle Dashboard</h1>
        </header>
        <p className="App-intro">
        <Timer countDown startTime={50} />
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
      </div>
    );
  }
}

export default App;
