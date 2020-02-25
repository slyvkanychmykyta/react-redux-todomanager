export function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const sortTasks = (tasks) => {
    const completed = tasks.filter((task) => task.completed);
    const usual = tasks.filter((task) => !task.favorite && !task.completed);
    const favorite = tasks.filter((task) => task.favorite && !task.completed);

    const sortedCompleted = completed.sort((task1, task2) => {
        if (task1.favorite && !task2.favorite) return 1;
        if (!task1.favorite && task2.favorite) return -1;
        return 0;
    });

    return [
        ...favorite,
        ...usual,
        ...sortedCompleted
    ];
};

export const generateRandomId = () => Math.random().toString(16).slice(-4);
