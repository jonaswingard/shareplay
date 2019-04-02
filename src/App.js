import React, { Component } from 'react';
import MainComponent from './MainComponent/MainComponent';
import 'normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shareplay</h1>
        </header>
        <main className="App-content">
          <MainComponent />
        </main>
      </div>
    );
  }
}

export default App;
