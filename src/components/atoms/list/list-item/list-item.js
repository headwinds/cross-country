import React, { Component } from 'react';
import styles from '../list.scss';

const ListItem = ({ children }) => <li className={styles.listItem}>{children}</li>;

export default ListItem;
