import {createStore} from 'redux';
import {manageLocalStorage} from '../instruments';
import {rootReducer} from '../store/reducers';



export const configureStore = () => {
    const todos = manageLocalStorage.loadData('todos');
    const initialState = {
        todos: todos
    };
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store.subscribe(() => {
        manageLocalStorage.saveData('todos', store.getState().todos);
    });

    return store;
};


