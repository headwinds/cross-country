import React, { Component, useState } from 'react';
import Column from '../../atoms/column';
import Row from '../../atoms/row';
import Radio from '../../atoms/radio';
import Label from '../../atoms/text/label';

// https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html

// register is a function from react-hook-form

const RadioGroup = ({ onChange, question, selectedId = 0, name = "name", register = null }) => {
  
  if (question?.options) {
    return <Column customStyle={{color: 'red'}}>Error: a list is required!</Column>;
  }

  if (!onChange) {
    return <Column customStyle={{color: 'red'}}>Error: onChange is required!</Column>;
  }

  if (!selectedId) {
    return <Column customStyle={{color: 'red'}}>Error: selectedId is required!</Column>;
  }

  const list = question.options;

  const [selected, setSelected] = useState(selectedId);

  // check the list and find the selected item
  const getSelected = id => (id === selectedId ? true : false);
  const getTabIndex = id => (id === selectedId ? 0 : 1);


  const radiobuttons = list.map(({ id, text }) => (
    <Row>
      <Radio register={register} key={id} id={id} onChange={() => onChange(id)} isSelected={getSelected(id)} tabIndex={getTabIndex(id)} />
      <Label forId={id}>{text}</Label>
    </Row>
  ));


  return <Column role="radiogroup" customStyle={{padding: 0}}>{radiobuttons}</Column>;
};

export default RadioGroup;
