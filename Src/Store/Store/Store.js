import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { UserReducer,AdminReducer } from '../Reducer';
const rootReducer = combineReducers({UserReducer, AdminReducer});
export const Store = createStore(rootReducer, applyMiddleware(thunk));