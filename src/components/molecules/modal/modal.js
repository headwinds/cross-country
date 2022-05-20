import React from 'react';
import { Column } from '../../';
import styles from './modal.scss';
import clsx from 'clsx';

const Modal = ({
  isSelected = false,
  isInteractive = false,
  customClass,
  fill = '#eee',
  customStyle = {},
  type,
  model = {},
  sample = 'metal',
  children,
}) => {
  const finalCustomStyle = { ...customStyle, backgroundColor: fill };

  return (
    <Column customClass={clsx(styles.modal, customClass)} hasChildrenCentered customStyle={{ ...finalCustomStyle }}>
      {children}
    </Column>
  );
};

export default Modal;
