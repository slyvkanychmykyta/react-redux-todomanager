import {sortTasks} from '../../instruments';

export const getFilteredTodos = (state, ownProps) => {
    const {query} = ownProps;
    const {todos} = state;
    const filteredTodos = todos.filter((todo) => todo.description.toLowerCase().includes(query.toLowerCase()));
    return sortTasks(filteredTodos);
};
