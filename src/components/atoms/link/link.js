import React, { Component } from 'react';
import styles from './link.scss';
import PropTypes from 'prop-types';

const Link = ({ url, children, size, target }) => (
  <a href={url} target={target} rel="noopener, noreferrer" className={`${styles.link} ${styles[`link__${size}`]}`}>
    {children}
  </a>
);

export default Link;

Link.defaultProps = {
  url: PropTypes.string,
  children: PropTypes.node,
  size: 'small',
  target: '_blank',
};

Link.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string,
  target: PropTypes.string,
};
