import React from 'react';
import * as renderer from 'react-test-renderer';
import Todo from './index';


describe('snapshot test', () => {
    test('should render component with todo', () => {
        const props = {
            todo: {
                    id: '0.safaf',
                    description: 'learn testing',
                    favorite: false,
                    completed: false,
                },
            editTodo: jest.fn(),
            toggleComplete: jest.fn(),
            removeTodo: jest.fn(),
            toggleFavorite: jest.fn()
        };

        const TodoFormComponent = renderer
            .create(<Todo {...props}/>)
            .toJSON();
        expect(TodoFormComponent).toMatchSnapshot();
    });
});
