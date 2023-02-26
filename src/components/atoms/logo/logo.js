import React, { Component } from 'react';
import styles from './logo.module.css';

const Logo = ({ url, a11y }) => <img src={url} width={200} className={styles.logo} alt={a11y} />;

export default Logo;
