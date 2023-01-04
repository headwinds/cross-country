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
