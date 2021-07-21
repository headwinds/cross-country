import React, { Component, useRef } from 'react';
import { Image, Column, SubHeadline } from '../../';
import styles from './sketch.scss';
import { SketchModel } from './models/sketch-model';

const Sketch = ({ config: { text, hasBackground } }) => {
  const sketchRef = useRef(null);

  return (
    <Column hasBackground={hasBackground} customClass={styles.sketch} ref={sketchRef}>
      <SubHeadline text={text} />
    </Column>
  );
};

export default Sketch;
