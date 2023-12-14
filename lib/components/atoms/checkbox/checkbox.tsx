import React from 'react';
import styles from './checkbox.module.css';
import clsx from 'clsx';

type CheckboxProps = {
  isChecked: boolean;
  id: string;
  handleChange: () => void;
  customClassName?: string;
  customStyle?: React.CSSProperties;
};

const Checkbox = ({ isChecked = false, id, handleChange, customClassName = '', customStyle = {} }: CheckboxProps) => {
  const classNameSelected = isChecked ? 'checkboxFormBefore' : null;
  const addStyle = classNameSelected ? styles[classNameSelected] : '';

  const className = `${styles.checkboxFunction} ${addStyle}`;
  return (
    <div
      className={clsx(styles.checkbox, className, customClassName)}
      role="checkbox"
      id={id}
      //checked={isChecked}
      onClick={handleChange}
      style={customStyle}
    />
  );
};

export default Checkbox;
