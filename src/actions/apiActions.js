import axios from 'axios'

export function fetchEnpoint(method, endpointToFetch){
    console.log(method + ' to ' + endpointToFetch )
    return function(dispatch){
        dispatch({type: "FIRE_ENDPOINT_PENDING"})
            axios.get('http://rest.learncode.academy/api/wstern/users')
        .then((response) => {
            dispatch({type: "FIRE_ENDPOINT_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: 'FIRE_ENDPOINT_REJECTED', payload: err})
        })
    }
}