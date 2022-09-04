import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { NavigationReducer } from './reducers/NavigationReducer.js'

const rootReducer = combineReducers({
    NavigationReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));