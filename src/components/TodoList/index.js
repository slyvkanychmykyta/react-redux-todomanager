import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {editTodo, deleteTodo, toggleCompleteTodo, toggleFavoriteTodo} from "../../store/actions";
import {getFilteredTodos} from '../../store/selectors';

import Todo from '../Todo';

import './styles.css';


export function TodoList({todos, editTodo, removeTodo, toggleComplete, toggleFavorite}) {
    return (
        <ul>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onCompleteClick={toggleComplete}
                    editTodo={editTodo}
                    onFavoriteClick={toggleFavorite}
                    onRemoveClick={removeTodo}
                />
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    editTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return ({
        todos: getFilteredTodos(state, ownProps)
    })
};

const mapDispatchToProps = (dispatch) => ({
    editTodo: (id, description) => dispatch(editTodo(id, description)),
    removeTodo: (id) => dispatch(deleteTodo(id)),
    toggleComplete: id => dispatch(toggleCompleteTodo(id)),
    toggleFavorite: id => dispatch(toggleFavoriteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
