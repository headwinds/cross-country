import React, { useEffect, useState } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';

// components
import { Row, Paragraph } from '../../';

// styles
import clsx from 'clsx';
import styles from './login.module.css';

const Response = ({ loginResponse }) => {
  if (loginResponse) {
    return (
      <Row>
        <Paragraph
          customClass={clsx(styles.login__response, {
            [styles.login__error]: loginResponse?.response?.hasError,
            [styles.login__success]: loginResponse?.response?.isSuccessful,
          })}
        >
          {loginResponse?.message}
        </Paragraph>
      </Row>
    );
  }

  return null;
};

const LoginResponseTransition = ({ isAnimated, loginResponse }) => {
  const [data, setData] = useState([1]);

  const transRef = useSpringRef();

  const [transitions, api] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(0px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 10px, 0px)', delay: 900 },
    leave: { opacity: 0, transform: 'translate3d(0px, 20px, 0px)' },
  }));

  useEffect(() => {
    if (loginResponse?.response?.isSuccessful) {
      // ok this works but I want to do it with the leave animation!
      transRef.start({
        opacity: 0,
        transform: 'translate3d(0px, 0px, 0px)',
      });
    } else {
      transRef.start();
    }
  }, [loginResponse]);

  if (isAnimated) {
    return transitions(style => (
      <animated.div style={style}>
        <Response loginResponse={loginResponse} />
      </animated.div>
    ));
  }

  return <Response loginResponse={loginResponse} />;
};

export default LoginResponseTransition;
