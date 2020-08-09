import {sortTasks} from '../../utils/helpers/tasks';
import {createSelector} from '@reduxjs/toolkit';

const getQuery = (state) => state.queryValue;
const getTasks = (state) => state.tasks;

const getFilteredTasks = createSelector(
    getQuery,
    getTasks,
    (queryValue, tasks) => tasks.filter((task) => task.description.toLowerCase().includes(queryValue.toLowerCase()))
);

export const getSortedTasks = createSelector(
    getFilteredTasks,
    (tasks) => sortTasks(tasks)
);
