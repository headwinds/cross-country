import styled from '@emotion/styled';

const red = "#8b0000"
const font = "Helvetica";

const getProductTile = isStacked => {
  return {
    display: "flex",
    background: "white",
    flexDirection: isStacked ? "column" : "row"
  };
};

const ProductTile = styled.div( props => getProductTile(props.isStacked) );

const Name = styled.p( {
  fontSize: 24,
  fontFamily: font
})

const Price = styled.p( {
  fontSize: 18,
  color: red
})

const Badge = styled.p( {
  color: red,
  fontWeight: "bold"
})


const Btn = styled.button( {
  border: "none",
  padding: 10,
  color: "white",
  backgroundColor: "black"
})

const components = {
  Name,
  Price,
  Btn,
  Badge,
  ProductTile
};

export default components;
