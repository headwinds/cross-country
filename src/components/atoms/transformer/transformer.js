import React, { Component } from 'react';
import styles from './transformer.scss';
import d3 from 'd3';

/**
 * A vector shape which can animate to another vector shape within a svg tag
 *
 * @category Atoms
 * @component
 * @param {function} onChangeHandler - A change handler function param
 * @param {object} customStyle - An object param
 * @param {string} value - A string param
 * @example
 * return (
 *   <TextInput onChangeHandler={onChangeHandler} customStyle={customStyle} value={value} />
 * )
 */
const Transformer = () => {
  <p className={styles.label} style={customStyle}>
    {text || children}
  </p>;
};

export default Transformer;
