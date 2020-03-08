import React, { Component } from 'react'
import styles from './subheadline.scss'

const Subheadline = ({text}) => (<h2 className={styles.subheadline}>{text}</h2>);

export default Subheadline;