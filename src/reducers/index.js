import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import tokenReducer from './tokenReducer';

const reducers = combineReducers({
    homeReducer:homeReducer,
    tokenReducer:tokenReducer})

export default reducers;