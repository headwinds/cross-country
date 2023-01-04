import React, { useState, CSSProperties, useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';
import { SubHeadline, Column, Row, TextInput, Label } from '../../../../../';
import styles from '../../../../login/login.scss';

// I want to animate the login title in and out of the login form
// and give a container box so that it has a crisp edge
const LoginFieldsTransition = ({ data = [], onUsernameChange, username }) => {
  const transRef = useSpringRef();

  const [usernameTransitions, usernameApi] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 500 },
    leave: { opacity: 0, transform: 'translate3d(200px, 0px, 0px)' },
  }));

  const [passwordTransitions, passwordApi] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(-50px, 0px, 0px)', delay: 700 },
    leave: { opacity: 0, transform: 'translate3d(200px, 0px, 0px)', delay: 100 },
  }));

  // we want to parent to start the both animations
  useEffect(() => {
    transRef.start();
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
