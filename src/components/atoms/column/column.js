/*
Atom

renders 1 native element
*/

import React, { Component } from 'react'
import styles from './column.scss'

const Column = ({children, hasBackground=true}) => (<div className={hasBackground ? `${styles.block} ${styles.block__opaque}` : styles.block}>{children}</div>);

export default Column;