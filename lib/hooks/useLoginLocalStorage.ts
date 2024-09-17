/*
 provide context - each wrapper should be a store for the tree
 the store can persist to localStorage
 
  localStorage.setItem('store', JSON.stringify(store));
  const store = JSON.parse(localStorage.getItem('store'));
  localStorage.clear();
  https://www.json.org/
*/

import { useState, useEffect } from "react";

type LocalStorageValue = {
  storedValue: unknown;
  storedUsername: string;
  storedPassword: string;
};

type UseLoginResult = [
  localStorageValue: LocalStorageValue,
  toggleMe: (username: string, password: string) => void
];

const useLoginLocalStorage = (
  key: string,
  initialValue: any
): UseLoginResult => {
  const [storedValue, setStoredValue] = useState(null);
  const [storedUsername, setStoredUsername] = useState(null);
  const [storedPassword, setStoredPassword] = useState(null);

  // get the value from local storage by key
  const getItemFromLocalStorage = () => {
    const item = window.localStorage.getItem(key);
    if (item) {
      const value = JSON.parse(item);
      setStoredValue(value);
      if (value) {
        const username = JSON.parse(window.localStorage.getItem("username"));
        const password = JSON.parse(window.localStorage.getItem("password"));
        setStoredUsername(username);
        setStoredPassword(password);
      }
    }
  };

  const toggleRememberMe = (username, password) => {
    // save the value to local storage
    const value = !storedValue;
    console.log("useLocalStorage: toggleRememberMe: value: ", { key, value });
    window.localStorage.setItem(key, JSON.stringify(value));

    if (!value) {
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("password");
      setStoredUsername(null);
      setStoredPassword(null);
    } else {
      window.localStorage.setItem("username", JSON.stringify(username));
      window.localStorage.setItem("password", JSON.stringify(password));
      setStoredUsername(username);
      setStoredPassword(password);
    }

    setStoredValue(value);
  };

  useEffect(() => {
    getItemFromLocalStorage();
  }, []);

  return [{ storedValue, storedUsername, storedPassword }, toggleRememberMe];
};

export default useLoginLocalStorage;
