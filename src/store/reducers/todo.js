import {ActionTypes} from '../actions/action-creators';

const initialState = [];

export function todo(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return state.concat([{
                id: action.id,
                description: action.description,
                completed: false,
                favorite: false
            }]);
        case ActionTypes.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case ActionTypes.TOGGLE_COMPLETE_TODO:
            return state.map((todo) => todo.id !== action.id ? todo
                : Object.assign({}, todo, {completed: !todo.completed})
            );
        case ActionTypes.TOGGLE_FAVORITE_TODO:
            return state.map((todo) => todo.id !== action.id ? todo
                : Object.assign({}, todo, {favorite: !todo.favorite})
            );
        case ActionTypes.EDIT_TODO:
            return state.map((todo) => todo.id !== action.id ? todo
                : Object.assign({}, todo, {description: action.description})
            );
        case ActionTypes.SET_ALL_COMPLETED:
            return state.map((todo) => todo.completed ? todo :
                Object.assign({}, todo, {completed: true}));
        default:
            return state;
    }
}


// case ActionTypes.ADD_TODO:
// return {
//     ...state,
//     [action.id]: {
//         id: action.id,
//         description: action.description,
//         completed: false,
//         favorite: false
//     }
// };
// case ActionTypes.DELETE_TODO:
// return Object.fromEntries(
//     Object.entries(state).filter(([key]) => key !== action.id)
// );
// case ActionTypes.EDIT_TODO:
// return {
//     ...state,
//     [action.id]: {
//         ...state[action.id],
//         description: action.description
//     }
// };
// case ActionTypes.TOGGLE_COMPLETE:
// return {
//     ...state,
//     [action.id]: {
//         ...state[action.id],
//         complete: !state[action.id]['complete']
//     }
// };
// case ActionTypes.TOGGLE_FAVORITE:
// return {
//     ...state,
//     [action.id]: {
//         ...state[action.id],
//         favorite: !state[action.id]['favorite']
//     }
// };
