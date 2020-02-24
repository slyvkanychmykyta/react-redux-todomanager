export const getFilteredTodos = (state, ownProps) => {
    const {query} = ownProps;
    const {todos} = state;
    return todos.filter((todo) => todo.description.toLowerCase().includes(query));
};
