/*
I was going to use this library but I want to try eliminate dependencies beyond react & d3

https://github.com/beautifulinteractions/beautiful-react-hooks

I'll try to refactor out this file...

credit
https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/src/useInterval.js
*/

import { useEffect, useState, useCallback, useRef } from 'react';

const defaultOptions = {
  cancelOnUnmount: true,
};

/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then repeats the
 * execution of the given function by the defined milliseconds.
 */
const useInterval = (fn, milliseconds, options = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}) };
  const timeout = useRef(null);
  const callback = useRef(fn);
  const [isCleared, setIsCleared] = useState(false);

  // the clear method
  const clear = useCallback(() => {
    if (timeout.current) {
      setIsCleared(true);
      clearInterval(timeout.current);
    }
  }, []);

  // if the provided function changes, change its reference
  useEffect(() => {
    if (typeof fn === 'function') {
      callback.current = fn;
    }
  }, [fn]);

  // when the milliseconds change, reset the timeout
  useEffect(() => {
    if (typeof milliseconds === 'number') {
      timeout.current = setInterval(() => {
        callback.current();
      }, milliseconds);
    }

    // cleanup previous interval
    return clear;
  }, [milliseconds]);

  // when component unmount clear the timeout
  useEffect(
    () => () => {
      if (opts.cancelOnUnmount) {
        clear();
      }
    },
    []
  );

  return [isCleared, clear];
};

export default useInterval;
