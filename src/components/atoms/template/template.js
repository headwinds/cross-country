/*
Atom

renders 1 native element
*/

import React, { Component } from 'react'
import styles from './template.scss'

const Template = ({message}) => (<p className={styles.paragraph}>{message}</p>);

export default Template;