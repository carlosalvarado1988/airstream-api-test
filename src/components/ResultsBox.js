import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ResultsBox extends Component {
    constructor(){
        super()
        this.results = {key: 'values'}
    }

    render() {
        return (
            <div className="ResultsBox">
                <p className="results-title">
                    Results
                </p>
                <input className="results-area" name="results"  type="text-area" value={this.results} readOnly />
                <div className="clear-button">
                <Button> Clear Results </Button>
                </div>
            </div>
        )
    }
}
 
export default ResultsBox;
