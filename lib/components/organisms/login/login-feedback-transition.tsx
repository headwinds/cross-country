/*
import React, { useEffect } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';

// components
import { Row, Button } from '../..';

// styles
import styles from './login.module.css';

const LoginSubmitTransition = ({ isAnimated, handleClick, isAuthenticated }) => {
  const data = [1];
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

  if (isAnimated) {
    return transitions(style => (
      <animated.div style={style}>
        <Row customClass={styles.login__rowSend}>
          <Button label="login" onClick={handleClick} customClass={styles.login__button}>
            Send
          </Button>
        </Row>
      </animated.div>
    ));
  }

  return (
    <Row customClass={styles.login__rowSend}>
      <Button label="login" onClick={handleClick} customClass={styles.login__button}>
        Send
      </Button>
    </Row>
  );
};

export default LoginSubmitTransition;*/
