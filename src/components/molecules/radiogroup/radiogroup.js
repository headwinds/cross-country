import React, { Component } from 'react';
import Column from '../../atoms/column';
import Row from '../../atoms/row';
import Radio from '../../atoms/radio';
import Label from '../../atoms/text/label';

// https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html

const RadioGroup = ({ handleChange, list, selectedId }) => {
  const getSelected = id => id === selectedId;
  const getTabIndex = id => (id === selectedId ? 0 : 1);

  const radiobuttons = list.map(({ id, text }) => (
    <Row>
      <Radio key={id} id={id} handleChange={handleChange} isSelected={getSelected(id)} tabIndex={getTabIndex(id)} />
      <Label text={text} forId={id} />
    </Row>
  ));

  return <Column role="radiogroup">{radiobuttons}</Column>;
};

export default RadioGroup;
