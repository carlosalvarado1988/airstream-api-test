import axios from 'axios'

export function fetchEnpoint(method, endpointToFetch){
    endpointToFetch = 'http://rest.learncode.academy/api/wstern/users'
    function callEndpoint () {
        switch(method){
            case 'POST': {
                return axios.post(endpointToFetch)
            }
            case 'GET': {
                return axios.get(endpointToFetch)
            }
            case 'PUT': {
                return axios.put(endpointToFetch)
            }
            case 'DELETE': {
                return axios.delete(endpointToFetch)
            }
            default: {
                return axios.get(endpointToFetch)
            }
        }
    }

    return function(dispatch){
        dispatch({type: "FETCH_ENDPOINT_PENDING"})
            callEndpoint()
        .then((response) => {
            dispatch({type: "FETCH_ENDPOINT_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: 'FETCH_ENDPOINT_REJECTED', payload: err})
        })
    }
}