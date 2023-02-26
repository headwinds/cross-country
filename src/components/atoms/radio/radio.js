import React from 'react';
import styles from './radio.module.css';
import useDeviceDetection from '../../../hooks/useDeviceDetection';

const Radio = ({ isSelected, id, handleChange, tabIndex }) => {
  const mobileState = useDeviceDetection();

  const key = 'radio';

  const className = isSelected ? styles[`${key}Selected`] : styles[`${key}`];

  return (
    <div
      className={className}
      role="radio"
      id={id}
      data-value={id}
      type="radio"
      checked={isSelected}
      onClick={handleChange}
      onKeyDown={handleChange}
      tabIndex={tabIndex}
    />
  );
};

export default Radio;
