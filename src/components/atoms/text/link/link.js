import React, { Component } from 'react'
import styles from './link.scss'

const Link = ({ url, text, size = "small"}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener, noreferrer"
    className={`${styles.link} ${styles[`link__${size}`]}`}
  >
    {text}
  </a>
);

export default Link;