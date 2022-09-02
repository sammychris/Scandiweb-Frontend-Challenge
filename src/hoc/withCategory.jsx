import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../reducers';

function withCategory(Component) {
  return function category(props) {
    const { name } = useParams();
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(QUERY(name));
    const { currency, cart } = useSelector((state) => state.prodState);

    const addToCart = (e, product) => {
      e.preventDefault();

      if (window.confirm('Do you wish to add this product without choosing attribute!')){

        const productIndex = cart.findIndex((el) => el.id === product.id);

        if (productIndex === -1) {

          dispatch(setCart([...cart, { ...product, quantity: 1 }]));
          window.alert('You\'ve successfully added a new product to Cart!');

        } else {

          const newCart = JSON.parse(JSON.stringify(cart));
          newCart[productIndex].quantity++;
          dispatch(setCart(newCart));
          window.alert('You\'ve successfully added another quantity of this product in Cart!');

        }

      }
    };

    return (
      <Component
        loading={loading}
        error={error}
        data={data}
        currency={currency}
        addToCart={addToCart}
        {...props}
      />
    );
  };
}

export default withCategory;

const QUERY = (name) => gql`
{
	category (input: { title: "${name || 'all'}" }) {
    name
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand 
    }
  }
}`;
