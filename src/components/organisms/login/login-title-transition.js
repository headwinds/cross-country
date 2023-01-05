import React, { useEffect } from 'react';
import { useTransition, animated, useSpringRef, useSpring } from '@react-spring/web';

// components
import { Image, TextInput, Column, Row, Paragraph, Button, Label, SubHeadline } from '../../';
import { postLoginUser } from '../../../services/login-service';
import { getUnsplashPhoto } from '../../../services/image-service';
import { privateConfig } from '../../../../cross-country-config-private';
import { getWindow } from '../../../utils/server-side-util';

// styles
import clsx from 'clsx';
import styles from './login.scss';

const LoginTitle = ({ isAnimated }) => {
  const data = [1];

  const loginTransRef = useSpringRef();
  const lineTransRef = useSpringRef();

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
    loginTransRef.start();
    lineTransRef.start();
  }, []);

  if (isAnimated) {
    return lineTransitions(lineStyle => (
      <animated.div style={lineStyle}>
        <Column
          customStyle={{
            width: 300,
            height: 24,
            padding: 0,
            margin: 0,
            overflow: 'hidden',
          }}
        >
          {transitions(style => (
            <animated.div style={style}>
              <SubHeadline text="Login" customClass={styles.login__title} />}
            </animated.div>
          ))}
        </Column>
      </animated.div>
    ));
  }

  return <SubHeadline text="Login" customClass={styles.login__title} />;
};

export default LoginTitle;
