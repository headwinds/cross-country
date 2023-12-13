import React, { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

// components
import { Column, SubHeadline } from '../../';

// styles
import styles from './login.module.css';

const LoginTitle = ({ isAnimated, isAuthenticated }) => {
  const loginStart = { opacity: 0, transform: 'translate3d(0px, -50px, 0px)' };
  const loginEnter = { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' };
  const loginLeave = { opacity: 0, transform: 'translate3d(0px, 50px, 0px)' };
  const [loginStyles, loginApi] = useSpring(() => loginStart);

  const lineStart = { opacity: 0 };
  const lineEnter = { opacity: 1 };
  const lineLeave = { opacity: 0 };
  const [lineStyles, lineApi] = useSpring(() => lineStart);

  const playAnimation = (api, config) => {
    api.start(config);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      playAnimation(loginApi, loginEnter);
      playAnimation(lineApi, lineEnter);
    } else {
      playAnimation(loginApi, loginLeave);
      playAnimation(lineApi, lineLeave);
    }
  }, [isAuthenticated]);

  console.log('Login Title isAnimated: ', isAnimated);

  if (isAnimated) {
    return (
      <animated.div style={lineStyles}>
        <Column
          customStyle={{
            padding: 0,
            margin: 0,
            overflow: 'hidden',
          }}
        >
          <animated.div style={loginStyles}>
            <SubHeadline text="Login" customClass={styles.login__title} />
          </animated.div>
        </Column>
      </animated.div>
    );
  }

  return <SubHeadline text="Login" customClass={styles.login__title} />;
};

export default LoginTitle;
