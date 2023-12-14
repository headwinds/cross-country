import React, { useEffect, useState } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';

// components
import { Row, Paragraph } from '../..';

// styles
import clsx from 'clsx';
import styles from './login.module.css';

const Response = ({ user }) => {
  if (user) {
    const hasError = user ? false : true;
    const isSuccessful = user ? true : false;
    return (
      <Row>
        <Paragraph
          customClass={clsx(styles.login__response, {
            [styles.login__error]: hasError,
            [styles.login__success]: isSuccessful,
          })}
        >
          {user ? "You're logged in!" : "Sorry, we couldn't log you in!"}
        </Paragraph>
      </Row>
    );
  }

  return null;
};

type LoginResponseTransitionProps = {
  isAnimated: boolean;
  user: any;
  isAuthenticated?: boolean;
}

const LoginResponseTransition = ({ isAnimated, user }: LoginResponseTransitionProps) => {
  const [data, setData] = useState([1]);

  const transRef = useSpringRef();

  const [transitions, api] = useTransition(data, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(0px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 10px, 0px)', delay: 900 },
    leave: { opacity: 0, transform: 'translate3d(0px, 20px, 0px)' },
  }));

  useEffect(() => {
    if (user) {
      // ok this works but I want to do it with the leave animation!
      transRef.start({
        opacity: 0,
        transform: 'translate3d(0px, 0px, 0px)',
      });
    } else {
      transRef.start();
    }
  }, [user]);

  if (isAnimated) {
    return transitions(style => (
      <animated.div style={style}>
        <Response user={user} />
      </animated.div>
    ));
  }

  return <Response user={user} />;
};

export default LoginResponseTransition;
