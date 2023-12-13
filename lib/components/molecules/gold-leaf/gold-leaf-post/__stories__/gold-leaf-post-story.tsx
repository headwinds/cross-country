import * as React from 'react';
import { useState } from 'react';
import { Column, Login } from '../../../../';
import GoldLeafPost from '../gold-leaf-post';

const initialState = {
  isAuthenticated: false,
  access_token: null,
  refresh_token: null,
  user: null,
};

const GoldLeafPostStory = ({ isOnlyText, hasMultiple, isKillScreen }) => {
  const [state, setState] = useState(initialState);

  const onLoginChange = user => {
    console.log('GoldLeafPostStory onLoginChange user: ', user);
    if (user) {
      setState({ ...state, user });
    }
  };

  const { user } = state;

  return (
    <Column customStyle={{ width: 280 }}>
      <Login isAnimated onChange={onLoginChange} />
      <GoldLeafPost user={user} />
    </Column>
  );
};

export default GoldLeafPostStory;
