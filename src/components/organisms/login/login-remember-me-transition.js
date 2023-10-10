import React, { useEffect, useCallback } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';

// components
import { Row, Button, Checkbox, Label } from '../..';

// styles
import styles from './login.module.css';

const LoginRememberMeTransition = ({ isAnimated, isChecked, handleRememberMeClicked }) => {
  const data = [1];
  const transRef = useSpringRef();

  const [transitions, api] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(0px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 10px, 0px)', delay: 900 },
    leave: { opacity: 0, transform: 'translate3d(0px, 20px, 0px)' },
  }));

  const RememberView = useCallback(
    () => (
      <Row customClass={styles.login__rowSend}>
        <Row customClass={styles.login__rowSend}>
          <Label customClass={styles.login__text}>Remember me?</Label>
          <Checkbox isChecked={isChecked} handleChange={handleRememberMeClicked} />
        </Row>
      </Row>
    ),
    [isChecked]
  );

  useEffect(() => {
    transRef.start();
  }, []);

  if (isAnimated) {
    return transitions(style => (
      <animated.div style={style}>
        <RememberView />
      </animated.div>
    ));
  }

  return <RememberView />;
};

export default LoginRememberMeTransition;
