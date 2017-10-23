import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ResultsBox extends Component {
    constructor(props) {
        super(props)
        this.clearData = this.clearData.bind(this)
        this.state = {
            data: ''
        }
    }

    componentWillReceiveProps (props) {
        this.setState({
            data: JSON.stringify(props.apiResponses.response)
        })
    }

    clearData() {
        this.setState({
            data: ''
        })
    }

    render() {
        return (
            <div className="ResultsBox">
                <p className="results-title">
                </p>
                <textarea 
                 className="results-area" 
                 name="results"
                 wrap='soft'
                 value={this.state.data}
                 readOnly
                />
                <div className="clear-button">
                <Button bsStyle="primary" bsSize="small" onClick={this.clearData}> Clear Results </Button>
                </div>
            </div>
        )
    }
}
 
export default ResultsBox;
