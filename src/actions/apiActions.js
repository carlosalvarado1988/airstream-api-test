import axios from 'axios'

export function fetchEnpoint(method, endpointToFetch){
    endpointToFetch = 'http://rest.learncode.academy/api/wstern/users'
    function _callEndpoint () {
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
            _callEndpoint()
        .then((response) => {
            dispatch({type: "FETCH_ENDPOINT_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: 'FETCH_ENDPOINT_REJECTED', payload: err})
        })
    }
}

export function fetchLogin(username, password){
    function _fetchLogin(){
        return axios.post('/parse/login?username='+username+'&password='+password)
    }

    return function(dispatch){
        dispatch({type: "FETCH_LOGIN_PENDING"})
            _fetchLogin()
        .then((response) => {
            console.log('FETCH_LOGIN_PENDING response ', response)
            dispatch({type: "FETCH_LOGIN_FULFILLED", payload: response})
        })
        .catch((err) => {
            dispatch({type: 'FETCH_LOGIN_REJECTED', payload: err})
        })
    }

}
