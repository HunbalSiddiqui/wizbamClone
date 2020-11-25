import {combineReducers} from 'redux'
import searchReducer from './searchReducer/searchReducer'


var rootReducer = combineReducers({
    searchedItem : searchReducer
})

export default rootReducer