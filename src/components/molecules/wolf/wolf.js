import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Wolf extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    const imageUrl = 'https://i.pinimg.com/originals/c2/99/c8/c299c825b1d9adf653a03760880c2d81.jpg';
    const image = {
        medium:imageUrl,
        medium2x:imageUrl,
        small2x:imageUrl,
        small:imageUrl
    }
    const product = {badge: "new", name:"hello", price:"free", images: [image]};

    return (
      <div>
          <img src={image.medium} width="300px" /> 
      </div>
    )
  }
}