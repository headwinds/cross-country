/*
 provide context - each wrapper should be a store for the tree
 the store can persist to localStorage
 
  localStorage.setItem('store', JSON.stringify(store));
  const store = JSON.parse(localStorage.getItem('store'));
  localStorage.clear();
  https://www.json.org/
*/

import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(null);

  // get the value from local storage by key
  const getItemFromLocalStorage = () => {
    const item = window.localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  };

  const setItemToLocalStorage = (value: any) => {
    // save the value to local storage
    console.log('useLocalStorage: setItemToLocalStorage: value: ', { key, value });
    window.localStorage.setItem(key, JSON.stringify(value));

    setStoredValue(value);
  };

  useEffect(() => {
    getItemFromLocalStorage();
  }, []);

  return [storedValue, setItemToLocalStorage];
};

export default useLocalStorage;
