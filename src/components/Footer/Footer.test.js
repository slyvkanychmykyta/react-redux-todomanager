import React from 'react';
import * as renderer from 'react-test-renderer';
import {Footer} from './index';


describe('snapshot test', () => {
    test('should render component with no todos', () => {
        const props = {
            todos: [],
            setAllCompleted: jest.fn(),
        };

        const TodoFormComponent = renderer
            .create(<Footer {...props}/>)
            .toJSON();
        expect(TodoFormComponent).toMatchSnapshot();
    });
});
