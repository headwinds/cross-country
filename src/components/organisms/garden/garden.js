import React, { Component } from 'react'
import Image from "../../atoms/image/image"
import Column from '../../atoms/column/column';
import SubHeadline from '../../atoms/text/subheadline/subheadline';

/**
 * Allows the user to enter text
 *
 * @category Organisms
 * @namespace Organisms.Garden
 * @component
 * @param {function} onChangeHandler - A change handler function param
 * @param {object} customStyle - An object param
 * @param {string} value - A string param
 * @example
 * const onChangeHandler = e => {}
 * const customStyle = {width: 200}
 * const value = "hello world"
 * return (
 *   <TextInput onChangeHandler={onChangeHandler} customStyle={customStyle} value={value} />
 * )
 */
const Garden = ({config: {url, text, a11y, hasBackground }}) => {
    return (
      <Column hasBackground={hasBackground}>
        <SubHeadline text={text} />
        <Image url={url} width="300" a11y={a11y} />
      </Column>
    )

}

export default Wolf;