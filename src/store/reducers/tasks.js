import {ActionTypes} from '../actions/action-creators';
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    queryValue: ``,
};

export const tasks = createReducer(initialState.tasks, {
    [ActionTypes.ADD_TASK]: (state, action) => {
        return [
            ...state,
             {
                 id: action.payload.id,
                 description: action.payload.description,
                 completed: false,
                 favorite: false
             }
         ]
    },
    [ActionTypes.TOGGLE_COMPLETE_TASK]: (state, action) => state.map((task) => task.id !== action.payload.id ? task : {...task, completed: !task.completed}),
    [ActionTypes.DELETE_TASK]: (state, action) => state.filter((task) => task.id !== action.payload.id),
    [ActionTypes.TOGGLE_FAVORITE_TASK]: (state, action) => state.map((task) => task.id !== action.payload.id ? task : {...task, favorite: !task.favorite}),
    [ActionTypes.EDIT_TASK]: (state, action) => state.map((task) => task.id !== action.payload.id ? task : {...task, description: action.payload.description}),
    [ActionTypes.SET_ALL_COMPLETED]: (state) => state.map((task) => ({...task, completed: true})),
});

export const queryValue = createReducer(initialState.queryValue,
    {
        [ActionTypes.SET_QUERY_VALUE]: (state, action) => action.payload.queryValue,
    }
);