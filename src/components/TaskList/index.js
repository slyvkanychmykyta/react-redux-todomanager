import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {editTask, deleteTask, toggleCompleteTask, toggleFavoriteTask} from "../../store/actions";
import {getSortedTasks} from '../../store/selectors';

import Task from '../Task';

import Styles from './styles.module.scss'


export function TaskList({tasks, editTask, removeTask, toggleComplete, toggleFavorite}) {
    return (
        <ul className={Styles.list}>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onCompleteClick={toggleComplete}
                    editTask={editTask}
                    onFavoriteClick={toggleFavorite}
                    onRemoveClick={removeTask}
                />
            ))}
        </ul>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    editTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return ({
        tasks: getSortedTasks(state),
    })
};

const mapDispatchToProps = (dispatch) => ({
    editTask: (id, description) => dispatch(editTask(id, description)),
    removeTask: (id) => dispatch(deleteTask(id)),
    toggleComplete: id => dispatch(toggleCompleteTask(id)),
    toggleFavorite: id => dispatch(toggleFavoriteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
