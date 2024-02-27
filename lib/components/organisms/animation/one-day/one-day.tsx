import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  useSpringRef,
  useTrail,
  config,
} from "@react-spring/web";
import { Actor, Column, Paragraph, Row } from "../../../../";
import styles from "./one-day.module.css";

type OneDay = {
  staticText: string;
  animatedTextArr: string[];
  fontStyles?: unknown;
};

const defaultFontStyles = {
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#333",
  marginLeft: 8,
  marginRight: 0,
  whiteSpace: "nowrap",
};

const OneDay = ({
  animatedTextArr = ["one day", "into", "day one!"],
  fontStyles = defaultFontStyles,
  textWidth = 200, // the animation jerks if the width is not set,
  textHeight = 78,
}: OneDay) => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const [animatedTextIndex, setAnimatedTextIndex] = useState(0);

  const getColor = (items) => {
    console.log("color  ", items);
    if (items === animatedTextArr[animatedTextArr.length - 1]) return "teal";

    return "#666";
  };

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      transform: "translateY(100%)",
      color: "#666",
      innerHeight: 0,
    },
    enter: [
      {
        opacity: 1,
        transform: "translateY(0%)",
        color: "#333",
        innerHeight: textHeight,
      },
      { color: getColor(items) },
      //{ fontStyle: "italic" },
    ],
    leave: [
      {
        transform: "translateY(100%)",
        opacity: 0,
        color: "666",
        innerHeight: 0,
      },
    ],
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);

    animatedTextArr.forEach((_, i) => {
      const milliseconds = i * 2000;
      ref.current.push(
        setTimeout(() => {
          set(animatedTextArr[i]);
          setAnimatedTextIndex(i);
        }, milliseconds)
      );
    });
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  const range = [...Array(animatedTextIndex).keys()];

  const blocks = range.map((_, i) => (
    <Paragraph
      key={i}
      customStyle={defaultFontStyles}
      customClass={styles.transitionText}
    >
      {animatedTextArr[i]}
    </Paragraph>
  ));

  return (
    <Column>
      <div className={styles.container}>
        {blocks}
        <div className={styles.main}>
          {transitions(({ innerHeight, color, ...rest }, item) => (
            <animated.div
              className={styles.transitionsItem}
              style={{ ...rest, width: textWidth }}
              onClick={reset}
            >
              <animated.div
                style={{
                  ...defaultFontStyles,
                  overflow: "hidden",
                  height: innerHeight,
                  color,
                }}
                className={styles.transitionText}
              >
                {item}
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </Column>
  );
};

export default OneDay;
