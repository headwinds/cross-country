import React, { Component } from 'react';
import styles from './headline.scss';

const Headline = ({ text, children }) => <h1 className={styles.headline}>{text || children}</h1>;

export default Headline;
