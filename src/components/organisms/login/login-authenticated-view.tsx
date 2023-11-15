import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

// components
import { Row, Button } from '../..';

// styles
import styles from './login.module.css';

import brandon from './brandon_square.png';

const LoginAuthenticatedView = ({ isAnimated, isAuthenticated = false }) => {
  const start = { opacity: 0, transform: 'translate3d(0px, 0px, 0px)' };
  const enter = { opacity: 1, transform: 'translate3d(0px, 10px, 0px)', delay: 900 };
  const leave = { opacity: 0, transform: 'translate3d(0px, 0px, 0px)' };
  const [animatedStyles, api] = useSpring(() => start);

  useEffect(() => {
    if (!isAuthenticated) {
      api.start(enter);
    } else {
      api.start(leave);
    }
  }, [isAuthenticated]);

  const fullName = ' Brandon Flowers';
  const a11y = 'brandon flowers';
  const url = brandon; // needs to be remote!
  const houseSigil = () => <Bolt />; // star wars? dune, game of thrones, etc...
  const ofHouse = ' of House Flowers';

  const AuthenticatedView = () => (
    <Row customClass={styles.login__rowSend}>
      <Column customStyle={{ padding: 0 }}>
        <Image a11y={a11y} url={url} width={100} height={100} customStyle={{ borderRadius: '50%' }} />
        <Headline>
          {houseSigil}
          {fullName}
          {ofHouse}
        </Headline>
      </Column>
    </Row>
  );

  if (isAnimated) {
    return (
      <animated.div style={animatedStyles}>
        <AuthenticatedView />
      </animated.div>
    );
  }

  return <AuthenticatedView />;
};

export default LoginSubmitTransition;
