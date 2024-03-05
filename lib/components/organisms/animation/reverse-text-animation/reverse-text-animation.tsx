import React, { useState, useEffect, useRef } from "react";
import { Row, Stagger } from "../../../";

const defaultReverseConfig = {
  startTask: "Learning",
  endTask: "Teaching",
  cursor: "_",
};

const ReverseTextAnimation = ({
  color = "darkgrey",
  titleOne = "Learn React, D3, XState",
  titleTwo = "& Machine",
  reverseConfig = defaultReverseConfig,
}) => {
  const { startTask, endTask, cursor } = reverseConfig;
  const [mlTask, setTask] = useState({
    word: startTask,
    index: startTask.length - 1,
  });

  const [isAnimating, setAnimating] = useState(false);
  const [hasCompletedPause, setCompletedPause] = useState(false);
  const staggerRowRef = useRef(null);

  const getNewTask = (word, index) => {
    const fromParts = startTask.substr(0, 2);
    let newMlTask = "";
    let newMlTaskIndex = 0;
    console.log("animate - word ", word);
    if (word.includes(fromParts)) {
      newMlTask = `${startTask.substr(0, index)}${cursor}`;
      newMlTaskIndex = index - 1;
      console.log("animate - index ", index);
    } else {
      newMlTask = `${endTask.substr(0, index)}${cursor}`;
      newMlTaskIndex = index + 1;
    }

    if (newMlTask.includes(endTask)) {
      newMlTask = endTask;
    }

    return { newMlTask, newMlTaskIndex };
  };

  const characterMilliseconds = 100;
  useEffect(() => {
    const afterFiveSeconds = 1000;
    const { word, index } = mlTask;
    if (staggerRowRef.current && hasCompletedPause && word !== endTask) {
      setTimeout(() => {
        const { newMlTask, newMlTaskIndex } = getNewTask(word, index);
        setTask({ word: newMlTask, index: newMlTaskIndex });
      }, characterMilliseconds);
    }
  }, [hasCompletedPause, mlTask]);

  useEffect(() => {
    const afterTwoSeconds = 2000;

    if (!hasCompletedPause) {
      setTimeout(() => {
        setCompletedPause(true);
      }, afterTwoSeconds);
      setAnimating(true);
    }
  }, [hasCompletedPause]);

  const staggerColor = "hotpink"; //[color, 'hotpink'];
  const { word } = mlTask;
  const staggerText = [titleOne, `${titleTwo} ${word}`];

  return (
    <Row ref={staggerRowRef}>
      <Stagger color={staggerColor} staggerText={staggerText} />
    </Row>
  );
};

export default ReverseTextAnimation;
