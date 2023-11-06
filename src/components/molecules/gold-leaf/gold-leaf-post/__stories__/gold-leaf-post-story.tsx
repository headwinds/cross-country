import * as React from 'react';
import { useState } from 'react';
import GoldLeafPost from '../gold-leaf-post';
import { Card, TextArea, Button, Form, Column, Login } from '../../../../';
import { set } from 'cypress/types/lodash';

const initialState = {
  isAuthenticated: false,
  access_token: null,
  refresh_token: null,
};

const GoldLeafPostStory = ({ isOnlyText, hasMultiple, isKillScreen }) => {
  const [state, setState] = useState(initialState);

  const onLoginChange = loginResponse => {
    console.log('GoldLeafPost heard...', loginResponse);
    if (loginResponse?.response) {
      const { isAuthenticated, access_token, refresh_token } = loginResponse.response;
      setState({ ...state, isAuthenticated, access_token, refresh_token });
    }
  };

  const onSaveClick = () => {
    console.log('GoldLeafPost about to save...', state);
  };

  return (
    <Column customStyle={{ width: 280 }}>
      <Login isAnimated onChange={onLoginChange} />
      <GoldLeafPost onSaveClick={onSaveClick} />
    </Column>
  );
};

export default GoldLeafPostStory;
