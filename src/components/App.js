import React, { Component } from 'react'
import { connect } from 'react-redux'

import EnpointsList  from './EnpointsList'
import ResultsBox  from './ResultsBox'

import { fetchEnpoint } from '../actions/apiActions'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this)
  }

  handleFetch(method, endpointToFetch) {
    this.props.dispatch(fetchEnpoint(method, endpointToFetch))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Airstream API Tester</h1>
        </header>
        <div className="Content">
        <div className="left">
        <EnpointsList 
            endpointsList={this.props.endpoints}
            handleFetch={this.handleFetch}
          />
        </div>
        <div className="rigth">
          <ResultsBox apiResponses={this.props.apiResponses}/>
        </div>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    apiResponses: state.apiResponses,
    endpoints: state.endpoints
  }
}

export default connect(mapStateToProps)(App)
