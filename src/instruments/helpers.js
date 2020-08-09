export function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

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

export const generateRandomId = () => Math.random().toString(16).slice(-4);


const loadDataFromLocalStorage = (key) => {
    const storageState = localStorage.getItem(key.toString());
    if (storageState) {
        try {
            return JSON.parse(storageState);
        } catch (err) {
            console.warn(`Caught error parsing localStorage state : ${err.message}`);
            return null;
        }
    }
    return undefined;
};

const saveDataToLocalStorage = (key, state) => {
    try {
        const storageState = JSON.stringify(state);
        localStorage.setItem(key.toString(), storageState);
    } catch (err) {
        console.warn(`Caught error stringifying localStorage state : ${err.message}`);
        return null;
    }
};

export const manageLocalStorage = {
    loadData: loadDataFromLocalStorage,
    saveData: saveDataToLocalStorage
};

