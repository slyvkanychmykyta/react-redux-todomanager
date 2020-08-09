import React from 'react';
import * as renderer from 'react-test-renderer';
import {TodoForm} from './index';


describe('snapshot test', () => {
    test('should render component correctly', () => {
        const props = {
            addTodo: jest.fn()
        };

        const TodoFormComponent = renderer
            .create(<TodoForm {...props}/>)
            .toJSON();
        expect(TodoFormComponent).toMatchSnapshot();
    })
});
