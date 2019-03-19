import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// Display component
import Comics from './components/ComicsHome';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Comics />
      </div>
    );
  }
}

export default App;
