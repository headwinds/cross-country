import React, { Component } from 'react'
import Label from "../../atoms/label"
import Row from '../../atoms/row';
import Checkbox from '../../atoms/checkbox';

const CheckboxLabel = ({config: {text, id, isChecked, handleChange }}) => {
    return (
      <Row>
        <Checkbox text={text} id={id} isChecked={isChecked} handleChange={handleChange} />
        <Label text={text} forId={id} />
      </Row>
    )

}

export default CheckboxLabel;