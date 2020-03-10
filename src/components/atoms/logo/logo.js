import React, { Component } from 'react'
import styles from './logo.scss'
import logo from "./logo.svg";

const Logo = () => (<img src={logo} width={200} className={styles.logo} alt={"cross country logo"} />);

export default Logo;