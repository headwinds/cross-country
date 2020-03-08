/*
Atom

renders 1 native element
*/

import React, { Component } from 'react'
import styles from './image.scss'

const Image = ({url, width}) => (<img src={url} width={width} className={styles.image} />);

export default Image;