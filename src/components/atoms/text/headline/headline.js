import React, { Component } from 'react'
import styles from './headline.scss'

const Headline = ({text}) => (<h1 className={styles.headline}>{text}</h1>);

export default Headline;