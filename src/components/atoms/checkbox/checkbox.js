import React from 'react';
import styles from './checkbox.module.css';

const Checkbox = ({ isChecked, id, handleChange }) => {
  const classNameSelected = isChecked ? 'checkboxFormSelected::before' : '';
  const className = `${styles.checkboxFunction} ${styles[classNameSelected]}`;
  return (
    <div
      className={styles.checkbox}
      role="checkbox"
      id={id}
      className={className}
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

export default Checkbox;
