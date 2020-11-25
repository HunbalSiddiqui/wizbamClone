import {applyMiddleware, createStore} from 'redux'
import rootReducer from './rootReducer';

var middleware = []


var store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;