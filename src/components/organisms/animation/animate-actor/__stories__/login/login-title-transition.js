import React, { useState, CSSProperties, useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';
import { SubHeadline, Column } from '../../../../../';

// I want to animate the login title in and out of the login form
// and give a container box so that it has a crisp edge
const LoginTitleTransition = ({ data = [], requiredRefs }) => {
  const { loginTransRef, lineTransRef } = requiredRefs;
  //const transRef = loginTransRef || useSpringRef();
  //const loginRef = useSpringRef();

  const [transitions, api] = useTransition(data, () => ({
    ref: loginTransRef,
    from: { opacity: 0, transform: 'translate3d(0px, 50px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    leave: { opacity: 0, transform: 'translate3d(0px, 50px, 0px)' },
  }));

  const [lineTransitions, lineApi] = useTransition(data, () => ({
    ref: lineTransRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }));

  // we want to parent to start the both animations
  useEffect(() => {
    //loginRef.start();
  }, []);

  return lineTransitions(lineStyle => (
    <animated.div style={lineStyle}>
      <Column
        customStyle={{
          width: 200,
          height: 24,
          padding: 0,
          margin: 0,
          overflow: 'hidden',
          borderBottom: '1px solid grey',
        }}
      >
        {transitions(style => (
          <animated.div style={style}>
            <SubHeadline text="Login" />}
          </animated.div>
        ))}
      </Column>
    </animated.div>
  ));
};

export default LoginTitleTransition;
