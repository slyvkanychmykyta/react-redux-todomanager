import {combineReducers} from 'redux';
import {tasks, queryValue} from "./tasks";

export const rootReducer = combineReducers({
    tasks: tasks,
    queryValue,
});
