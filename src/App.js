import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Header"/>
        <Card title="Caption" info="additional text"/>
      </div>
    );
  }
}

export default App;
