import React, { Component } from 'react';
import EndpointInputBox from './EndpointInputBox';

class EnpointsList extends Component {

    render() {
        console.log('this.props.enpointsList ', this.props.enpointsList)
        var list = this.props.enpointsList.map((endpoint, idx) => {
            return <li key={idx}> 
                        <EndpointInputBox 
                            endpoint={endpoint.endpoint} 
                            enpointType={endpoint.enpointType}
                            urlParam={endpoint.requiresUrlParam}
                            bodyParam={endpoint.requiresBodyParam}
                        /> 
                   </li>
        })

        return (
            <div className="EnpointsList">
                <ul className='ul-list'>
                    {list}
                </ul>
            </div>
        )
    }
}

export default EnpointsList;
