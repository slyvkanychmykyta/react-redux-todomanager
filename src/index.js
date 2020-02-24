// Core
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// Instruments
import './theme/init.scss';

// App
import App from './components/App/App.js';

// rootReducer
import {rootReducer} from './store/reducers';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
