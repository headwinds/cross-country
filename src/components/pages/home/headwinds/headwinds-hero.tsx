import React from 'react';
import { Branches } from '../../../';

const HeadwindsHero = ({ onLoadedCallback }) => {
  return <Branches onLoadedCallback={onLoadedCallback} isTesting />;
};
export default HeadwindsHero;
