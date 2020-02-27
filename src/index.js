// Core
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {manageLocalStorage} from './instruments';
// Instruments
import './theme/init.scss';

// App
import App from './components/App/App.js';

// rootReducer
import {rootReducer} from './store/reducers';

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

render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
