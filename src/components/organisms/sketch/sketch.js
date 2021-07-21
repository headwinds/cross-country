import React, { Component, useRef } from 'react';
import { Image, Column, SubHeadline } from '../../';
import styles from './sketch.scss';
import { SketchModel } from './models/sketch-model';

const Sketch = ({ config: { text, hasBackground } }) => {
  
  return (
    <Column hasBackground={hasBackground} customClass={styles.sketch} ref={}>
      <SubHeadline text={text} />
    </Column>
  );
};

export default Sketch;
