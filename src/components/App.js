import React, { Component } from 'react';
import './App.css';
import EndpointInputBox from './EndpointInputBox';
import ResultsBox from './ResultsBox';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Airstream API Tester</h1>
        </header>
        <p className="App-intro">
          Select an endpoint to test from the list
        </p>
          <EndpointInputBox />
          <ResultsBox />
      </div>
    );
  }
}

export default App;
