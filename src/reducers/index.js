import { combineReducers } from 'redux'
import apiReducer from './apiReducer'
import endpointsReducer from './endpointsReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    apiResponses: apiReducer,
    endpoints: endpointsReducer,
    login: loginReducer
})
