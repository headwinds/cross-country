import * as React from 'react';
import Field from '../field';

const FieldStory = () => {
  const onTextChange = () => {};
  const fieldProps = { text: 'hello world', onTextChange, value: '', type: 'input', isValid: true, isUntouched: false };

  return (
    <div style={{ display: 'flex' }}>
      <Field {...fieldProps} />
    </div>
  );
};

export default FieldStory;
