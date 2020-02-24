export const ActionTypes = {
    ADD_TODO: `ADD_TODO`,
    DELETE_TODO: `DELETE_TODO`,
    EDIT_TODO: `EDIT_TODO`,
    TOGGLE_COMPLETE_TODO: `TOGGLE_COMPLETE`,
    TOGGLE_FAVORITE_TODO: `TOGGLE_FAVORITE`,
    SET_ALL_COMPLETED: `SET_ALL_COMPLETED`
};

const createActionCreator = (type, ...argNames) => (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
    });
    return action;
};

export const addTodo = createActionCreator(ActionTypes.ADD_TODO, 'id', 'description');
export const deleteTodo = createActionCreator(ActionTypes.DELETE_TODO, 'id');
export const editTodo = createActionCreator(ActionTypes.EDIT_TODO, 'id', 'description');
export const toggleCompleteTodo = createActionCreator(ActionTypes.TOGGLE_COMPLETE_TODO, 'id');
export const toggleFavoriteTodo = createActionCreator(ActionTypes.TOGGLE_FAVORITE_TODO, 'id');
export const setAllCompleted = createActionCreator(ActionTypes.SET_ALL_COMPLETED);
