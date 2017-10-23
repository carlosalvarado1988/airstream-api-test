const initialState = {
    fetching: false,
    fetched: false,
    response: [],
    error: null
}

export default function apiReducer(state=initialState, action) {
    switch (action.type){
        case 'FIRE_ENDPOINT_PENDING': {
            state = {...state, 
                fetching: true }  
            break
        }
        case 'FIRE_ENDPOINT_REJECTED': {
            state = {...state, 
                fetching: false, 
                error: action.payload }
            break
        }
        case 'FIRE_ENDPOINT_FULFILLED': {
            state = { ...state, 
                fetching: false, 
                response: action.payload}
            break
            
        }
        default: { 
            break
        } 
    }
    return state
}