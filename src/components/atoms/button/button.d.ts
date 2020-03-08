import * as React from 'react';

export interface ButtonProps {
  text: string;
  customStyle?: any;
  clickHandler?: any
}

declare const Button: React.ComponentType<ButtonProps>;

export default Button;