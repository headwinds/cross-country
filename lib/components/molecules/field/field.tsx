import * as React from 'react';
import { Row, Label, TextInput } from '../../';
import { FieldProps } from './field.types';
import clsx from 'clsx';
import styles from './field.module.css';

const Field = ({ text = 'hello world', onTextChange, value, type, isValid, isUntouched }: FieldProps) => {
  return (
    <Row customClass={styles.field__row}>
      <Label
        htmlFor={text.toLowerCase()}
        customClass={clsx(styles.field__label, { [styles.field__label_valid]: isValid && !isUntouched })}
      >
        {text}
      </Label>
      <TextInput
        id={text.toLowerCase()}
        onTextChange={onTextChange}
        value={value}
        customClass={styles.field__input}
        placeholder={`enter your ${text.toLowerCase()}`}
        type={type}
      />
    </Row>
  );
};

export default Field;
