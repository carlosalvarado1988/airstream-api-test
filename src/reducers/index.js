import { combineReducers } from 'redux'
import apiReducer from './apiReducer'
import endpointsReducer from './endpointsReducer'

export default combineReducers({
    apiResponses: apiReducer,
    endpoints: endpointsReducer
})
