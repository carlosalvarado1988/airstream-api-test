import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class EndpointInputBox extends Component {

    render() {
        function geturlParamSection() {
            return ( 
                <div className="input-parameter">
                <label className="data-entry-label" htmlFor="parameter">Url Parameter: </label>
                <input className="data-entry-input" name="parameter" type="text" placeholder=""></input>
                </div>
            )
        }
        function getbodyParamSection() {
            return ( 
                <div className="input-parameter">
                <label className="data-entry-label" htmlFor="body">Body data: </label>
                <input className="data-entry-input" name="body-data" type="text" placeholder=""></input>
                </div>
            )
        }
      
        var urlParamSection = this.props.urlParam ?  geturlParamSection() : null
        var bodyParamSection = this.props.bodyParam ?  getbodyParamSection() : null


        return (
            <div className="EndpointInputBox">
                <div className="endpoint-wrapper">
                <p className="endpoint-type">
                {this.props.enpointType} 
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
                    <Button> Test Endpoint </Button>
                </div>             
            </div>
        )
    }
}

export default EndpointInputBox;
