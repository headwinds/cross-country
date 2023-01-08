import * as React from 'react';
import { animated, useTransition, useSpring, useChain, useSpringRef, config } from '@react-spring/web';
import { LoadingProps } from './loading.types';

import styles from './loading.scss';

const Loading: React.FC<LoadingProps> = ({ label, isAnimated = false }) => {
  // thank you @garrettmaring for the tip https://github.com/pmndrs/react-spring/issues/493
  // Now I want to turn into another example where the enter transition can do a sequence of animations
  /*
  const [passwordTransitions, passwordApi] = useTransition(data, () => ({
    ref: usernameTransRef,
    from: item => async (next, cancel) => {
      await new Promise(resolve => setTimeout(resolve, 700));
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 0, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
    },
    enter: item => async (next, cancel) => {
      await new Promise(resolve => setTimeout(resolve, 700));
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 0, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
    },
    leave: item => async (next, cancel) => {
      await new Promise(resolve => setTimeout(resolve, 700));
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 0, transform: 'translate3d(-50px, 0px, 0px)' });
      await next({ opacity: 1, transform: 'translate3d(-50px, 0px, 0px)' });
    },
  }));*/

  return (
    <div data-testid="loading" className={styles.Loading}>
      {label || 'Loading...'}
    </div>
  );
};

export default Loading;
