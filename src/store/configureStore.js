import {createStore} from 'redux';
import {manageLocalStorage} from '../utils/helpers';
import {rootReducer} from '../store/reducers';



export const configureStore = () => {
    const tasks = manageLocalStorage.loadData('tasks');
    const initialState = {
        tasks: tasks
    };
    const store = createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store.subscribe(() => {
        manageLocalStorage.saveData('tasks', store.getState().tasks);
    });

    return store;
};


