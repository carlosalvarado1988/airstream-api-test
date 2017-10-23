const initialState = {
    fetching: false,
    fetched: false,
    response: [],
    error: null
}

export default function apiReducer(state=initialState, action) {
    switch (action.type){
        case 'FETCH_ENDPOINT_PENDING': {
            return {...state, 
                fetching: true }  
        }
        case 'FETCH_ENDPOINT_REJECTED': {
            return {...state, 
                fetching: false, 
                response: action.payload,
                error: action.payload }
        }
        case 'FETCH_ENDPOINT_FULFILLED': {
            return { ...state, 
                fetching: false, 
                response: action.payload}
        }
        default: { 
            return state
        } 
    }
}