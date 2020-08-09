import React from 'react';
import * as renderer from 'react-test-renderer';
import {TodoList} from './index';


describe('snapshot test', () => {
    test('should render component correctly', () => {
        const props = {
            todos:[],
            editTodo: jest.fn(),
            toggleComplete: jest.fn(),
            removeTodo: jest.fn(),
            toggleFavorite: jest.fn()
        };

        const TodoFormComponent = renderer
            .create(<TodoList {...props}/>)
            .toJSON();
        expect(TodoFormComponent).toMatchSnapshot();
    });

    test('should render component with two todos', () => {
        const props = {
            todos:[
                {
                    id: '0.safaf',
                    description: 'learn testing',
                    favorite: false,
                    completed: false,
                },
                {
                    id: '0.safkj',
                    description: 'learn jest',
                    favorite: false,
                    completed: false,
                }
            ],
            editTodo: jest.fn(),
            toggleComplete: jest.fn(),
            removeTodo: jest.fn(),
            toggleFavorite: jest.fn()
        };

        const TodoFormComponent = renderer
            .create(<TodoList {...props}/>)
            .toJSON();
        expect(TodoFormComponent).toMatchSnapshot();
    });
});
