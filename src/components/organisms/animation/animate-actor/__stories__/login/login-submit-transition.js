import React, { useState, CSSProperties, useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';
import { SubHeadline, Column, Row, TextInput, Label, Button } from '../../../../../';
import styles from '../../../../login/login.scss';

// I want to animate the login title in and out of the login form
// and give a container box so that it has a crisp edge
const LoginSubmitTransition = ({ data = [], handleClick }) => {
  const transRef = useSpringRef();

  const [transitions, api] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(0px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 10px, 0px)', delay: 900 },
    leave: { opacity: 0, transform: 'translate3d(0px, 20px, 0px)' },
  }));

  useEffect(() => {
    transRef.start();
  }, []);

  return transitions(style => (
    <animated.div style={style}>
      <Row customClass={styles.login__rowSend}>
        <Button label="login" onClick={handleClick} customClass={styles.login__button}>
          Send
        </Button>
      </Row>
    </animated.div>
  ));
};

export default LoginSubmitTransition;
