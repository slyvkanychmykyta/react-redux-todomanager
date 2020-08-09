import {ActionTypes} from '../actions/action-creators';

const initialState = {
    tasks: [],
    queryValue: ``,
};

export function tasks(state = initialState.tasks, action) {
    switch (action.type) {
        case ActionTypes.ADD_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    description: action.description,
                    completed: false,
                    favorite: false
                }
            ];
        case ActionTypes.DELETE_TASK:
            return state.filter((task) => task.id !== action.id);
        case ActionTypes.TOGGLE_COMPLETE_TASK:
            return state.map((task) => task.id !== action.id ? task : {...task, completed: !task.completed});
        case ActionTypes.TOGGLE_FAVORITE_TASK:
            return state.map((task) => task.id !== action.id ? task : {...task, favorite: !task.favorite});
        case ActionTypes.EDIT_TASK:
            return state.map((task) => task.id !== action.id ? task : {...task, description: action.description});
        case ActionTypes.SET_ALL_COMPLETED:
            return state.map((task) => ({...task, completed: true}));
        default:
            return state;
    }
}

export function queryValue(state = initialState.queryValue, action) {
    if (action.type === ActionTypes.SET_QUERY_VALUE) {
        const { queryValue } = action;
        return queryValue;
    }
    return state;
}
