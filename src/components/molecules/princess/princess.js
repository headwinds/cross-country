import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from "./princess.scss";

export default class Princess extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    const imageUrl = 'https://i.pinimg.com/originals/3d/26/3e/3d263efde96d082aa041c923a0fe8b08.png';
    const image = {
        medium:imageUrl,
        medium2x:imageUrl,
        small2x:imageUrl,
        small:imageUrl
    }
    const product = {badge: "new", name:"hello", price:"free", images: [image]};

    return (
      <div className={styles.Princess__Title}>
        <h1>Princess</h1>
          <img src={image.medium} width="300px" /> 
      </div>
    )
  }
}