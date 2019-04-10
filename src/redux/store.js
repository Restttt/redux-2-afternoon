import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise-middleware';
import budgetReducer from './ducks/budgetReducer';
import userReducer from './ducks/userReducer';


// STORE //

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
});

export default createStore(rootReducer, applyMiddleware(reduxPromise));