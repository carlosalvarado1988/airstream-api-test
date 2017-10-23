import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class EndpointInputBox extends Component {
    constructor(props) {
        super(props)
        this.handleFetch = this.handleFetch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getUriParamsSection = this.getUriParamsSection.bind(this)

        this.state = {
            userID: '',
            value: '',
            body: ''
        }
      }

    handleFetch() {
        let endpointType = this.props.endpointType
        let endpoint = this.props.endpoint
        let uriOneData = this.state.uriOneData
        let uriTwoData = this.state.uriTwoData

        if (uriOneData || uriTwoData) {
            endpoint = endpoint + '/' + uriOneData
        }

        this.props.handleFetch(endpointType, endpoint)
    }

    handleChange (evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    getUriParamsSection() {
        var uriParamsInputs = this.props.uriParams.map((parameter) => {
            return ( 
                <div className="input-parameter">
                    <label className="data-entry-label" htmlFor="UriOneParameter">
                        {parameter}: 
                    </label>
                    <input 
                    className="data-entry-input" 
                    name={parameter} 
                    type="text" 
                    placeholder=""
                    onChange={this.handleChange}
                    />
                </div>
            ) 
        })
       return uriParamsInputs
    }

    getBodyParamSection() {
        return ( 
            <div className="input-parameter">
            <label className="data-entry-label" htmlFor="UriTwoParameter">
                body:
            </label>
            <input 
             className="data-entry-input" 
             name="body" 
             type="text" 
             placeholder=""
             onChange={this.handleChange}
            />
            </div>
        )
    }

    render() {
        var uriParamsInputs = this.props.uriParams ?  this.getUriParamsSection() : null
        var bodyParamSection = this.props.body ?  this.getBodyParamSection() : null

        return (
            <div className="EndpointInputBox">
                <p className="endpoint-name">
                    {this.props.name}   
                </p>
                <div className="endpoint-wrapper">
                <p className="endpoint-type">
                    {this.props.endpointType} 
                </p>
                <p className="endpoint-tittle">
                    {this.props.endpoint}
                </p>
                </div>
                <div className="input-wrapper">
                {uriParamsInputs}
                {bodyParamSection}
                </div>

                <div className="test-button">
                    <Button 
                     bsStyle="success"  
                     bsSize="xsmall" 
                     onClick={this.handleFetch}> Test 
                    </Button>
                </div>             
            </div>
        )
    }
}

export default EndpointInputBox;
