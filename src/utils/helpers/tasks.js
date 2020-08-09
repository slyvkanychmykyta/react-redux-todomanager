export const sortTasks = (tasks) => {
    const completed = tasks.filter((task) => task.completed);
    const usual = tasks.filter((task) => !task.favorite && !task.completed);
    const favorite = tasks.filter((task) => task.favorite && !task.completed);
    const sortedCompleted = completed.sort((task1, task2) => task1.favorite - task2.favorite);

    return [
        ...favorite,
        ...usual,
        ...sortedCompleted
    ];
};