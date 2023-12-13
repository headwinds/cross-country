import React, { forwardRef } from 'react';
// components
import { Column, Row } from '../../';
import styles from './tree.css';
import TreeBuilder from './tree-simple-algorithm';
import RecursiveTreeBuilder from './tree-recursive-algorithm';

const Tree = forwardRef((props, ref) => {
  const { size = 600, fill = 'white', instructionList = [], strategy = 'simple' } = props;
  const style = {
    width: size,
    height: size,
    backgroundColor: fill,
  };

  console.log('TreeBuilder', TreeBuilder);

  const Builder = strategy === 'simple' ? TreeBuilder : RecursiveTreeBuilder;

  return (
    <div className={styles.tree} style={style} ref={ref}>
      <div dangerouslySetInnerHTML={{ __html: Builder.buildTree(instructionList) }} />
    </div>
  );
});

export default Tree;
