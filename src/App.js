import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Foobar = function(props){
  return <span>Hello World </span>
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Foobar />
      </div>
    );
  }
}

export default App;
