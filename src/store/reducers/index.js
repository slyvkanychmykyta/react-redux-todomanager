import {combineReducers} from 'redux';
import {tasks, queryValue} from "./todo";

export const rootReducer = combineReducers({
    tasks: tasks,
    queryValue,
});
