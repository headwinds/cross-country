/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from "react";
import components from "./product-tile-emotion-styled";

const ProductTileStyledWithEmotionStyledComponents = (props) => {
  const { isStacked, product } = props;
  const {badge, name, price, images} = product;
  const [isSelected, setProductSelected] = useState(false);

  const { Name,
    Price,
    Btn,
    Badge,
    ProductTile
  } = components;

  const handleProductClick = (event) => {
    event.preventDefault();

    setProductSelected(!isSelected)
  }

  const image = images[0];

  const color = "black"

  return (
    <ProductTile isStacked={isStacked}  onClick={handleProductClick}>
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
        {badge && <Badge>{badge}</Badge>}
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Btn>BUY</Btn>
      </div>   
    </ProductTile>
  );
};

export default ProductTileStyledWithEmotionStyledComponents;
