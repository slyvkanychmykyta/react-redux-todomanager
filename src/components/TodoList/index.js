import React from 'react';
import Todo from '../Todo';
import { connect } from 'react-redux'
import {editTodo, deleteTodo, toggleCompleteTodo, toggleFavoriteTodo} from "../../store/actions";
import {getFilteredTodos} from '../../store/selectors';

import {generateRandomId} from '../../instruments/helpers';

function TodoList({todos, editTodo, removeTodo, toggleComplete, toggleFavorite}) {
    return (
        <ul>
            <div>
                {todos.map((todo) => (
                    <Todo
                        key={generateRandomId()}
                        todo={todo}
                        onCompleteClick={toggleComplete}
                        editTodo={editTodo}
                        onFavoriteClick={toggleFavorite}
                        onRemoveClick={removeTodo}
                    />
                ))}
            </div>
        </ul>
    )
}

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
