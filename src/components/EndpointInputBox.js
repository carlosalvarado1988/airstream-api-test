import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class EndpointInputBox extends Component {
    constructor(props) {
        super(props)
        this.handleFetch = this.handleFetch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            urlData: '',
            bodyData: ''
        }
      }

    handleFetch() {
        let endpointType = this.props.endpointType
        let endpoint = this.props.endpoint
        let urlData = this.state.urlData
        let bodyData = this.state.bodyData

        if (urlData) {
            endpoint = endpoint + '/' + urlData
        }

        this.props.handleFetch(endpointType, endpoint, bodyData)
    }

    handleChange (evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    geturlParamSection() {
        return ( 
            <div className="input-parameter">
            <label className="data-entry-label" htmlFor="parameter">Url Parameter: </label>
            <input 
             className="data-entry-input" 
             name="urlData" 
             type="text" 
             placeholder=""
             onChange={this.handleChange}
             />
            </div>
        )
    }

    getbodyParamSection() {
        return ( 
            <div className="input-parameter">
            <label className="data-entry-label" htmlFor="body">Body data: </label>
            <input 
             className="data-entry-input" 
             name="bodyData" 
             type="text" 
             placeholder=""
             onChange={this.handleChange}
            />
            </div>
        )
    }

    render() {
        var urlParamSection = this.props.urlParam ?  this.geturlParamSection() : null
        var bodyParamSection = this.props.bodyParam ?  this.getbodyParamSection() : null

        return (
            <div className="EndpointInputBox">
                <div className="endpoint-wrapper">
                <p className="endpoint-type">
                {this.props.endpointType} 
                </p>
                <p className="endpoint-tittle">
                    {this.props.endpoint}
                </p>
                </div>
                <div className="input-wrapper">
                {urlParamSection}
                {bodyParamSection}
                </div>

                <div className="test-button">
                    <Button bsStyle="success"  bsSize="xsmall" onClick={this.handleFetch}> Test Endpoint </Button>
                </div>             
            </div>
        )
    }
}

export default EndpointInputBox;
