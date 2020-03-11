import React, { Component } from 'react'
import styles from './logo.scss'

const Logo = ({url, a11y}) => (<img src={url} width={200} className={styles.logo} alt={a11y} />);

export default Logo;