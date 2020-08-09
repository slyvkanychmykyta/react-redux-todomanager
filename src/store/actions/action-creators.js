export const ActionTypes = {
    ADD_TASK: `ADD_TASK`,
    DELETE_TASK: `DELETE_TASK`,
    EDIT_TASK: `EDIT_TASK`,
    TOGGLE_COMPLETE_TASK: `TOGGLE_COMPLETE`,
    TOGGLE_FAVORITE_TASK: `TOGGLE_FAVORITE`,
    SET_ALL_COMPLETED: `SET_ALL_COMPLETED`,
    SET_QUERY_VALUE: `SET_QUERY_VALUE`,
};

const createActionCreator = (type, ...argNames) => (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
    });
    return action;
};

export const addTask = createActionCreator(ActionTypes.ADD_TASK, 'id', 'description');
export const deleteTask = createActionCreator(ActionTypes.DELETE_TASK, 'id');
export const editTask = createActionCreator(ActionTypes.EDIT_TASK, 'id', 'description');
export const toggleCompleteTask = createActionCreator(ActionTypes.TOGGLE_COMPLETE_TASK, 'id');
export const toggleFavoriteTask = createActionCreator(ActionTypes.TOGGLE_FAVORITE_TASK, 'id');
export const setAllCompleted = createActionCreator(ActionTypes.SET_ALL_COMPLETED);
export const setQueryValue = createActionCreator(ActionTypes.SET_QUERY_VALUE, 'queryValue');
