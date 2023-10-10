import React, { useEffect } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';

// components
import { Loading } from '../../';

const LoginFetchingTransition = ({ isAnimated, isFetching }) => {
  // need to use isFetching to trigger the transition in and out
  const data = isFetching ? [1] : [];
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
        <Loading />
      </animated.div>
    ));
  }

  return isFetching ? <Loading /> : null;
};

export default LoginFetchingTransition;
