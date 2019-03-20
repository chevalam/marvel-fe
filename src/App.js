import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// Display component
import Comics from './components/ComicsHome';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      <Comics />
      </div>
    );
  }
}

export default App;
