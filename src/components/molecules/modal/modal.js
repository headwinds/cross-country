import React from 'react';
import { Column } from '../../';
import styles from './modal.css';
import clsx from 'clsx';

const Modal = ({
  isSelected = false,
  isInteractive = false,
  customClass,
  width = 200,
  height = 300,
  fill = '#eee',
  customStyle = {},
  type,
  model = {},
  sample = 'metal',
  children,
  ...rest
}) => {
  const finalCustomStyle = { ...customStyle, width, height, backgroundColor: fill };

  return (
    <Column
      customClass={clsx(styles.tileModal, styles[sample])}
      hasChildrenCentered
      customStyle={{ ...finalCustomStyle, width: size - 4, height: size - 4 }}
      {...rest}
    >
      {children}
    </Column>
  );
};

export default Modal;
