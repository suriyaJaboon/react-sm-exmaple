import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React SM Example  </h2>
          <strong> Suriya Jaboon</strong>
        </div>
        <p className="App-intro">
         <small>  To get started, edit <code>src/App.js</code> and save to reload. </small>
        </p>
      </div>
    );
  }
}

export default App;
