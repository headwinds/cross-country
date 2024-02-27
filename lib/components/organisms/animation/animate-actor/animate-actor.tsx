import * as React from "react";
import { useState, useEffect } from "react";
import {
  animated,
  useTransition,
  useSpring,
  useChain,
  useSpringRef,
  config,
} from "@react-spring/web";
import { Actor, Column } from "../../../../";

const AnimateActor = () => {
  const springRef = useSpringRef();

  const [props, api] = useSpring(
    () => ({
      ref: springRef,
      from: { x: 0, y: 0, z: 0 },
    }),
    []
  );

  const move = (distance) => {
    const { x, y, z } = props;
    const curX = x.get();
    const curY = y.get();
    const newDistanceRight = curX + distance;
    const newDistanceDown = curY + distance;
    const newDistanceLeft = newDistanceRight - distance;
    const newDistanceUp = newDistanceDown - distance;

    let count = 0; // had to use a simple let as useState seems to affect the animation restarting it!

    const onRest = () => {
      count = count < 4 ? count + 1 : 0;
      setWarriorReport(warriorReports[count]);
    };

    const multipleTo = async (next, cancel) => {
      await next({ x: newDistanceRight, onRest });
      await next({ y: newDistanceDown, onRest });
      await next({ x: newDistanceLeft, onRest });
      await next({ y: newDistanceUp, onRest });
    };

    api.start({
      to: multipleTo,
      onPause: () => console.log("move spring has paused"),
      onResume: () => console.log("move spring has resumed"),
      config: config.gentle,
      loop: true,
    });
  };

  return (
    <Column>
      Hi Actor
      <Actor />
    </Column>
  );
};

export default AnimateActor;
