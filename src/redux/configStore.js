import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { NavigationReducer } from './reducers/NavigationReducer.js'
import { SalaryReducer } from './reducers/SalaryReducer.js'
import { RetirementInfoReducer } from './reducers/RetirementInfoReducer.js'
import { GuestRetirementInfoReducer } from './reducers/GuestReducer.js'

const rootReducer = combineReducers({
    NavigationReducer,
    SalaryReducer,
    RetirementInfoReducer,
    GuestRetirementInfoReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));