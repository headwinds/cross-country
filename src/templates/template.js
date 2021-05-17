import React, { Component } from 'react';
import { Image, Column, SubHeadline } from '../components';

/**
 * Allows the user to enter text
 *
 * @category Molecules
 * @component
 * @param {function} onChangeHandler - A change handler function param
 * @param {object} customStyle - An object param
 * @param {string} value - A string param
 * @example
 * return (
 *   <TextInput onChangeHandler={onChangeHandler} customStyle={customStyle} value={value} />
 * )
 */
const Template = ({ config: { text, hasBackground } }) => {
  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={text} />
    </Column>
  );
};

export default Template;
