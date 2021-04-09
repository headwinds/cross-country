import React, { Component } from 'react';
import styles from './list.scss';

const List = ({ children }) => <ul className={styles.list}>{children}</ul>;

export default List;
