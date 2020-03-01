import React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import TodoManager from '../TodoManager';
import { Provider } from 'react-redux';

describe('snapshot test', () => {
    const mockStore = configureStore([]);
    const initialState = {
        todos: []
    };
    const store = mockStore(initialState);

    test('it should render component correctly', () => {
        const TodoManagerComponent = renderer.create(
            <Provider store = {store}>
                <TodoManager />
            </Provider>
        ).toJSON();
        expect(TodoManagerComponent).toMatchSnapshot();
    });
});
