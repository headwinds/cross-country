/*
Atom

renders 1 native element
*/

import React, { Component } from 'react'
import styles from './block.scss'

const Block = ({children, isSolid=true}) => (<div className={isSolid ? `${styles.block} ${styles.block__opaque}` : styles.block}>{children}</div>);

export default Block;