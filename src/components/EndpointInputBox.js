import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class EndpointInputBox extends Component {
    render() {
        return (
            <div className="EndpointInputBox">
                <p className="endpoint-tittle">
                    Endpoint: /parse/functions/allFriends
                </p>
                <div className="url-parameter">
                    <label for="parameter">Url Parameter: </label>
                    <input name="parameter" type="text" className="data-entry" placeholder="Enter a parameter to add to url"></input>
                </div>
                <div className="body-data">
                    <label for="body">Body data: </label>
                    <input name="body-data" type="text" className="data-entry" placeholder="Enter a parameter as body data"></input>
                </div>                
                <Button> Test Endpoint </Button>
            </div>
        )
    }
}

export default EndpointInputBox;
