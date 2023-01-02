import { useState } from 'react';
import { animated, useTransition, useSpring, useChain, useSpringRef } from '@react-spring/web';
import { Button, Column, TextInput, Label, Row, SubHeadline } from '../../../../';

import Login from './login/login';

const AnimateActorUseTransitions = () => {
  const [go, setGo] = useState(false);
  const springRef = useSpringRef();

  const tileSize = 50;

  const handleClick = () => {
    if (!go) {
      setGo(true);
    }
  };

  const resetGo = () => {
    setGo(false);
  };

  return (
    <Column>
      <Column customStyle={{ width: 400, height: 300, backgroundColor: 'white', border: '1px solid grey' }}>
        <Login go={go} resetGo={resetGo} />
      </Column>
      <Column customStyle={{ width: 400, alignItems: 'center' }}>
        <Button customStyle={{ width: 200, opacity: go ? 0.3 : 1 }} onClick={handleClick}>
          Reveal Login
        </Button>
      </Column>
    </Column>
  );
};

export default AnimateActorUseTransitions;
