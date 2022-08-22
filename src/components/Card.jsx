import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import addToCartIcon from '../assets/add-to-cart.svg';

class Card extends React.Component {
  render() {
    const { currency, product } = this.props;
    const {
      id, inStock, gallery, brand, name, prices,
    } = product;
    const price = prices.find((el) => el.currency.label === currency.label);
    return (
      <Container>
        <ProductUrl to={`/product/${id}`}>
          <ProductImg src={gallery[0]}>
            {!inStock && <Span>OUT OF STOCK</Span>}
            <AddToCartIcon src={addToCartIcon} />
          </ProductImg>
          <Title>{`${brand} ${name}`}</Title>
          <PriceTag>{price.currency.symbol + price.amount.toFixed(2)}</PriceTag>
        </ProductUrl>
        {!inStock && <Overlay to={`/product/${id}`} />}
      </Container>
    );
  }
}

export default Card;

const AddToCartIcon = styled.image`
  width: 52px;
  height: 52px;
  position: absolute;
  bottom: -20px;
  right: 20px;
`;

const Container = styled.div`
  padding: 14px;
  height: 444px;
  margin: 40px auto;
  &:hover ${AddToCartIcon} {
    display: block;
  }
  &:hover {
    box-shadow: 0px 2px 5px 0px #c7c7c7;
  }
  position: relative;
`;
const ProductUrl = styled(Link)`
  text-decoration: none;
`;
const Title = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: #1D1F22;
  margin-top: 15px;
  padding: 10px 0;
`;

const PriceTag = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #1D1F22;
  padding: 10px 0;
`;

const ProductImg = styled.div`
  display: block;
  width: 350px;
  height: 330px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(Link)`
  background: #fffefe;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

const Span = styled.span`
  font-family: Raleway;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  color: #8D8F9A;
`;