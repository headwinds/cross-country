import React from 'react';
import { Branches } from '../../../';

const HeadwindsHero = ({ isLoading, isTesting }) => {
  return <Branches isTesting={isTesting} isLoading={isLoading} />;
};
export default HeadwindsHero;
