import * as React from 'react';

export interface ButtonProps {
  text: string;
  label?: string;
  customStyle?: any;
  handleClick?: any
}

declare const Button: React.ComponentType<ButtonProps>;

export default Button;