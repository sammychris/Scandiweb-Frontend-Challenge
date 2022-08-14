import React from 'react';
import styled from 'styled-components';
import addToCartIcon from '../assets/add-to-cart.svg';

class AddToCartIcon extends React.Component {
  render() {
    return (
      <AddToCartIconStyles />
    );
  }
}

export default AddToCartIcon;

const AddToCartIconStyles = styled.a`
  display: none;
  width: 52px;
  height: 52px;
  background-image: url(${addToCartIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  bottom: -20px;
  right: 20px;
`;
