/*
Atom

renders 1 native element
*/

import React, { Component } from 'react'
import styles from './row.scss'

const Row = ({children}) => (<div className={styles.flex}>{children}</div>);

export default Row;