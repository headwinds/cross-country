import React, { Component } from 'react'
import styles from './paragraph.scss'

const Paragraph = ({text, customStyle = {}}) => (<p className={styles.paragraph} style={customStyle}>{text}</p>);

export default Paragraph;