import React from 'react';
import { Column, Label } from '../../../';

/*
Note the header is only 50px tall so use it render alerts and notifications
*/
const HeadwindsHeader = ({ message = '', isLoading = false }) => {
  return (
    <Column>
      <Label>{message}</Label>
    </Column>
  );
};
export default HeadwindsHeader;
