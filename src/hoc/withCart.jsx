import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../reducers';

function withCart(Component) {
  return function cart (props) {
    const dispatch = useDispatch();
    const { cart, currency } = useSelector((state) => state.prodState);
    let quantity = 0;
    let totalAmount = 0;
    let percentage = 0;

    const onIncrement = (e, product) => {
      e.preventDefault();
      const productIndex = cart.findIndex((el) => el.id === product.id);
      const newCart = JSON.parse(JSON.stringify(cart));
      newCart[productIndex].quantity++;

      dispatch(setCart(newCart));
    };

    const onDecrement = (e, product) => {
      e.preventDefault();
      if (product.quantity < 2) {
        if (window.confirm('Are you sure you want to remove this from cart?')) {
          const newCart = cart.filter((el) => el.id !== product.id);
          dispatch(setCart(newCart));
        }
        return;
      }

      const productIndex = cart.findIndex((el) => el.id === product.id);
      const newCart = JSON.parse(JSON.stringify(cart));
      newCart[productIndex].quantity--;

      dispatch(setCart(newCart));
    };

    cart?.forEach((product) => {
      quantity += product.quantity;
      totalAmount += (product.quantity * product.prices.find((price) => price.currency.label === currency.label).amount);
      percentage = (20 / 100) * totalAmount;
    });

    return (
      <Component
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        cart={cart}
        quantity={quantity}
        totalAmount={totalAmount}
        percentage={percentage}
        currency={currency}
        {...props}
      />
    );
  };
}

export default withCart;
