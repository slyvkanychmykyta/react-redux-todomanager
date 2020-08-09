import {configureStore} from '@reduxjs/toolkit';
import {manageLocalStorage} from '../utils/helpers';
import {rootReducer} from '../store/reducers';



export const getStoreFromLocalStorage = () => {
    const tasks = manageLocalStorage.loadData('tasks');
    const initialState = {
        tasks: tasks
    };
    const store = configureStore(
        {
            reducer: rootReducer,
            devTools: true,
            preloadedState: initialState,
        }
    );

    store.subscribe(() => {
        manageLocalStorage.saveData('tasks', store.getState().tasks);
    });

    return store;
};


