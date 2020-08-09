import {sortTasks} from '../../utils/tasks';
import {createSelector} from 'reselect';

const getQuery = (state) => state.queryValue;
const getTasks = (state) => state.tasks;

const getFilteredTodos = createSelector(
    getQuery,
    getTasks,
    (queryValue, tasks) => tasks.filter((task) => task.description.toLowerCase().includes(queryValue.toLowerCase()))
);

export const getSortedTasks = createSelector(
    getFilteredTodos,
    (tasks) => sortTasks(tasks)
);
