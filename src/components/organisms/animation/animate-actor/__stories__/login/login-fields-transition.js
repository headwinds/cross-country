import React, { useState, CSSProperties, useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';
import { SubHeadline, Column, Row, TextInput, Label } from '../../../../../';
import styles from '../../../../login/login.scss';

// I want to animate the login title in and out of the login form
// and give a container box so that it has a crisp edge
const LoginFieldsTransition = ({ data = [], requiredFieldRefs, onUsernameChange, username }) => {
  const { usernameTransRef, passwordTransRef } = requiredFieldRefs;
  //const transRef = loginTransRef || useSpringRef();
  //const loginRef = useSpringRef();

  const [usernameTransitions, usernameApi] = useTransition(data, () => ({
    ref: usernameTransRef,
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 500 },
    leave: { opacity: 0, transform: 'translate3d(200px, 0px, 0px)' },
  }));

  const [passwordTransitions, passwordApi] = useTransition(data, () => ({
    ref: usernameTransRef,
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 700 },
    leave: { opacity: 0, transform: 'translate3d(200px, 0px, 0px)', delay: 100 },
  }));

  // thank you @garrettmaring for the tip https://github.com/pmndrs/react-spring/issues/493
  // Now I want to turn into another example where the enter transition can do a sequence of animations
  /*
  const [passwordTransitions, passwordApi] = useTransition(data, () => ({
    ref: usernameTransRef,
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    enter: item => async (next, cancel) => {
      await new Promise(resolve => setTimeout(resolve, 700));
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 0, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
    },
    leave: { opacity: 0, transform: 'translate3d(200px, 0px, 0px)' },
  }));*/

  // we want to parent to start the both animations
  useEffect(() => {
    //usernameTransRef.start();
  }, []);

  return (
    <Column customStyle={{ width: 400 }}>
      {usernameTransitions(style => (
        <animated.div style={style}>
          <Row customClass={styles.login__row}>
            <Label customClass={styles.login__label}>Username</Label>
            <TextInput onChange={onUsernameChange} value={username} customClass={styles.login__input} />
          </Row>
        </animated.div>
      ))}
      {passwordTransitions(style => (
        <animated.div style={style}>
          <Row customClass={styles.login__row}>
            <Label customClass={styles.login__label}>Password</Label>
            <TextInput onChange={onUsernameChange} value={username} customClass={styles.login__input} />
          </Row>
        </animated.div>
      ))}
    </Column>
  );
};

export default LoginFieldsTransition;
