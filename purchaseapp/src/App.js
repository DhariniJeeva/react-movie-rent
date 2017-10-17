import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Purchase from './Purchase' ;
class App extends Component {
  render() {
    var item = [
      { name : "Zootopia", price: 19 },
      { name : "La La Land", price: 9 },
      { name : "Finding Dory", price: 21 },
      { name : "The Jungle Book", price: 5 },
      { name : "Manchester by the sea", price: 4 }

];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>MOVIE RENTING APP!</h1>
        </div>

        <Purchase items= {item}/>

      </div>
    );
  }
}

export default App;
