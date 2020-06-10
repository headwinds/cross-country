import React, { Component } from 'react'
import styles from './link.scss'

const Link = ({ url, text, size = "small", target="_blank"}) => (
  <a
    href={url}
    target={target}
    rel="noopener, noreferrer"
    className={`${styles.link} ${styles[`link__${size}`]}`}
  >
    {text}
  </a>
);

export default Link;