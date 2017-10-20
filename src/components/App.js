import React, { Component } from 'react';
import './App.css';
import  EnpointsList  from './EnpointsList';
import  ResultsBox  from './ResultsBox';


class App extends Component {
  render() {

    var enpointsArray = [
      {endpoint:'/parse/functions/allFriends',
      enpointType: 'POST',
      requiresUrlParam: true,
      requiresBodyParam: true
      },
      {endpoint:'/parse/GET/allFriends',
      enpointType: 'GET',
      requiresUrlParam: false,
      requiresBodyParam: true
      },
      {endpoint:'/parse/PUT/allFriends',
      enpointType: 'PUT',
      requiresUrlParam: true,
      requiresBodyParam: false
      },
      {endpoint:'/parse/ABC/allFriends',
      enpointType: 'POST',
      requiresUrlParam: false,
      requiresBodyParam: false
      }
    ]

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Airstream API Tester</h1>
        </header>
          <EnpointsList enpointsList={enpointsArray} />
          <ResultsBox />
      </div>
    );
  }
}

export default App;
