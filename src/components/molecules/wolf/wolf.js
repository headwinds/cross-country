import React, { Component } from 'react'
import Image from "../../atoms/image/image"
import Column from '../../atoms/column/column';
import SubHeadline from '../../atoms/text/subheadline/subheadline';

const Wolf = ({config: {url, text, a11y }}) => {
// 'https://i.pinimg.com/originals/c2/99/c8/c299c825b1d9adf653a03760880c2d81.jpg'
// 'https://i.pinimg.com/originals/3d/26/3e/3d263efde96d082aa041c923a0fe8b08.png'
    return (
      <Column hasBackground={true}>
        <SubHeadline text={text} />
        <Image url={url} width="300" a11y={a11y} />
      </Column>
    )

}

export default Wolf;