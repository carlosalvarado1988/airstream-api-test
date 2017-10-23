import React, { Component } from 'react';
import EndpointInputBox from './EndpointInputBox';

class EnpointsList extends Component {

    render() {
        var list = this.props.endpointsList.map((endpoint, idx) => {
            return <li key={idx}> 
                        <EndpointInputBox 
                            endpoint={endpoint.endpoint} 
                            endpointType={endpoint.type}
                            urlParam={endpoint.url}
                            bodyParam={endpoint.body}
                            handleFetch={this.props.handleFetch}
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
