import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import usersReducer from './usersReducer';
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    users: usersReducer,
    dialogs: dialogsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;