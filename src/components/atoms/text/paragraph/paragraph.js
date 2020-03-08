import React, { Component } from 'react'
import styles from './paragraph.scss'

const Paragraph = ({text}) => (<p className={styles.paragraph}>{text}</p>);

export default Paragraph;