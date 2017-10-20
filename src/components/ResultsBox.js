import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ResultsBox extends Component {
    render() {
        return (
            <div className="ResultsBox">
                <h2>
                    Results
                </h2>
                <input className="results-area" name="results" type="text-area"  ></input>        
                <div>
                <Button> Clear </Button>
                </div>
            </div>
        )
    }
}

export default ResultsBox;
