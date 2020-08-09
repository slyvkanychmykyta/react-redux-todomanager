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

