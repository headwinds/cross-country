import React, { useState } from "react";
//import styles from "./ProductTile.module.scss";

const ProductTile = (props) => {
  const { isStacked, product } = props;
  const {badge, name, price, images} = product;
  const [isSelected, setProductSelected] = useState(false);

  const handleProductClick = (event) => {
    event.preventDefault();

    setProductSelected(!isSelected)
  }

  const image = images[0];

  return (
    <div onClick={handleProductClick}>
      {image && (<picture>
        <source 
          media="(min-width: 650px)" 
          srcSet={`${image.medium}, ${image.medium2x}`} />
        <source 
          media="(min-width: 465px)" 
          srcSet={`${image.small}, ${image.small2x}`} />
        <img width="200px"
          src={image.small}
          srcSet={`${image.small}, ${image.small2x}`}
          alt={name} />
      </picture>)}

      <div>
        {badge && <p>{badge}</p>}
        <p>{name}</p>
        <p>{price}</p>
      </div>   
    </div>
  );
};

export default ProductTile;
