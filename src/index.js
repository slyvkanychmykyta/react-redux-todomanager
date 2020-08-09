// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import {getStoreFromLocalStorage} from './store/configureStore';
import './theme/init.scss';

// App
import App from './components/App/App.js';


const store = getStoreFromLocalStorage();

render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
