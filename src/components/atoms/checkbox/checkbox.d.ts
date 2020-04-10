import * as React from 'react';

export interface CheckboxProps {
  text: string;
  id?:string;
  handleChange?: any
}

declare const Checkbox: React.FunctionalComponent<CheckboxProps>;

export default Checkbox;