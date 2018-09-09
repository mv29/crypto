import Tickers from './Tickers';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <h2>Crypto</h2>
            </div>
            <Tickers />
        </div>
    );
  }
}

export default App;
