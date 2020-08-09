import {createAction} from "@reduxjs/toolkit";
export const ActionTypes = {
    ADD_TASK: `ADD_TASK`,
    DELETE_TASK: `DELETE_TASK`,
    EDIT_TASK: `EDIT_TASK`,
    TOGGLE_COMPLETE_TASK: `TOGGLE_COMPLETE`,
    TOGGLE_FAVORITE_TASK: `TOGGLE_FAVORITE`,
    SET_ALL_COMPLETED: `SET_ALL_COMPLETED`,
    SET_QUERY_VALUE: `SET_QUERY_VALUE`,
};

export const addTask = createAction(ActionTypes.ADD_TASK,
    (id, description) => (
        {
            payload: {
                id,
                description
            }
        }
    )
);


export const deleteTask = createAction(ActionTypes.DELETE_TASK,
    (id) => (
        {
            payload: {
                id,
            }
        }
    )
);

export const editTask = createAction(ActionTypes.EDIT_TASK,
    (id, description) => (
        {
            payload: {
                id,
                description
            }
        }
    )
);
export const toggleCompleteTask = createAction(ActionTypes.TOGGLE_COMPLETE_TASK,
    (id) => ({
        payload: {
            id,
        }
    })
);

export const toggleFavoriteTask = createAction(ActionTypes.TOGGLE_FAVORITE_TASK,
    (id) => ({
        payload: {
            id,
        }
    })
);
export const setAllCompleted = createAction(ActionTypes.SET_ALL_COMPLETED);

export const setQueryValue = createAction(ActionTypes.SET_QUERY_VALUE,
    (queryValue) => ({
        payload: {
            queryValue,
        }
    })
);
