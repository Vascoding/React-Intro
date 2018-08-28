import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CMP } from './components/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To Your To Do List</h1>
        </header>
        <div><CMP.Todo /></div>
        <br />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
