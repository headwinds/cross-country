import React, { Component } from 'react'
import styles from './logo.scss'
import cross_country from "./cross-country.svg";

const CrossCountryLogo = () => (<img src={cross_country} width={200} className={styles.logo} alt={"cross country logo"} />);

export default CrossCountryLogo;