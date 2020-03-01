import React from 'react';
import { connect } from 'react-redux'
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import {editTodo, deleteTodo, toggleCompleteTodo, toggleFavoriteTodo} from "../../store/actions";
import {getFilteredTodos} from '../../store/selectors';

import Todo from '../Todo';

import './styles.css';

export function TodoList({todos, editTodo, removeTodo, toggleComplete, toggleFavorite}) {
    return (
        <ul>
            <TransitionGroup>
                {todos.map((todo) => (
                    <CSSTransition
                        key={todo.id}
                        timeout={400}
                        classNames='todo'
                    >
                        <Todo
                            todo={todo}
                            onCompleteClick={toggleComplete}
                            editTodo={editTodo}
                            onFavoriteClick={toggleFavorite}
                            onRemoveClick={removeTodo}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
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
