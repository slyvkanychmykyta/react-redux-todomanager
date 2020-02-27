import React, { useState } from 'react';
export const useLocalStorage = (key, initialState) => {
    const getInitialState = () => {
      const storageItem = localStorage.getItem(`${key}`);
      if (storageItem) {
          try {
              return JSON.parse(storageItem);
          } catch (error) {
              console.warn(`Error parsing localStorage: ${error.message}`);
              return null;
          }
      }
      return initialState;
    };

    const [value, setValue] = useState(getInitialState());

    React.useEffect(() => {
        let newValue;
        try {
            newValue  = JSON.stringify(value);
        } catch (error) {
            console.warn(`Error stringifying localStorage: ${error.message}`);
            return null;
        }
        localStorage.setItem(key, newValue);
    }, [value]);

    return [value, setValue];
};
