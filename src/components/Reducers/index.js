import { combineReducers } from 'redux';
import taskReducers from './taskReducers';

export const rootReducer = combineReducers({
    task: taskReducers
})