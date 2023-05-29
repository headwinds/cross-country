import React from 'react';
import styles from './link.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Link = ({ url, children, size, target, customClass = '', customStyle = {}, ...rest }) => (
  <a
    {...rest}
    href={url}
    target={target}
    rel="noopener, noreferrer"
    className={clsx(`${styles.link} ${styles[`link__${size}`]}`, customClass)}
    style={customStyle}
  >
    {children}
  </a>
);

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

export default Link;
