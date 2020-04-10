import React, { Component } from 'react'
import Image from "../../atoms/image/image"
import Column from '../../atoms/column/column';
import SubHeadline from '../../atoms/text/subheadline/subheadline';

const Wolf = ({config: {url, text, a11y, hasBackground }}) => {
    return (
      <Column hasBackground={hasBackground}>
        <SubHeadline text={text} />
        <Image url={url} width="300" a11y={a11y} />
      </Column>
    )

}

export default Wolf;