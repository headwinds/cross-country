/*
Atom

renders 1 native element
*/

import React, { Component } from 'react'
import styles from './row.scss'

const Row = ({children, hasChildrenCentered = true}) => {
  const style = {};
  style["justifyContent"] = hasChildrenCentered ? "center" : "flex-start";

  return (<div className={styles.row} style={style}>{children}</div>)
};

export default Row;