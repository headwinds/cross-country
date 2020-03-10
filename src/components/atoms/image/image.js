import React, { Component } from 'react'
import styles from './image.scss'

const Image = ({url, width, a11y}) => (<img src={url} width={width} className={styles.image} alt={a11y} />);

export default Image;