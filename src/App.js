import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Card from './Card/Card'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephaie', age: 26}
    ]
  }

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
