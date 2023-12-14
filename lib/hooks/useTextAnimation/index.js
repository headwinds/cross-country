import { useState } from 'react';
import useInterval from '../useInterval';

export const useTextAnimation = (fromText = 'Learning', toText = 'Teaching') => {
  const [{ mlTask }, setState] = useState({ mlTask: fromText });

  const startTask = fromText;
  const endTask = toText;
  const len = startTask.length - 1;
  const cursor = '_';
  let newMLTask = startTask;
  let mlTaskIndex = len;

  const animation = () => {
    const fromParts = fromText.substr(0, 2);
    if (newMLTask.includes(fromParts)) {
      newMLTask = ` ${startTask.substr(0, mlTaskIndex)}${cursor}`;

      mlTaskIndex--;
      return setState({ mlTask: newMLTask });
    } else {
      newMLTask = ` ${endTask.substr(0, mlTaskIndex)}${cursor}`;
      mlTaskIndex++;

      if (mlTaskIndex > endTask.length) {
        clearInterval(mlTextAnimateInterval);
        return setState({ mlTask: endTask });
      }

      return setState({ mlTask: newMLTask });
    }
  };

  const afterFiveSeconds = 5000;
  const characterMilliseconds = 100;

  setTimeout(() => {
    useInterval(animation, characterMilliseconds);
  }, 5000);

  return {
    mlTask,
  };
};
