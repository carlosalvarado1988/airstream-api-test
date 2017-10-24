const initialState = {
    isLogged: false,
    username: '',
    password: '',
    token: ''
}

export default function apiReducer(state=initialState, action) {
    switch (action.type){
        case 'FETCH_LOGIN_PENDING': {
            return {...state, 
                username: action.payload.username,
                password: action.payload.password
            }  
        }
        case 'FETCH_LOGIN_REJECTED': {
            return {...state,
                username: action.payload.username,
                password: action.payload.password
            }
        }
        case 'FETCH_LOGIN_FULFILLED': {
            return { ...state, 
                username: action.payload.username,
                password: action.payload.password,
                isLogged: true,
                token: action.payload.token
            }
        }
        default: { 
            return state
        } 
    }
}