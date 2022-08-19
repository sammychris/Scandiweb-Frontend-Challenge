import React from 'react';
import styled from 'styled-components';
import H1Text from '../components/H1Text';
import Layout from '../components/Layout';
import H3Text from '../components/H3Text';
import CommonButton from '../components/CommonButton';
import withCart from '../hoc/withCart';
import CartItem from '../containers/CartItem';

class Cart extends React.Component {
  render() {
    const {
      cart,
      onIncrement,
      onDecrement,
      quantity,
      totalAmount,
      percentage,
      currency,
    } = this.props;
    return (
      <Layout>
        <H1Text>CART</H1Text>
        <CartContainer>
          { cart.length
            ? (
              <>
                <HrLine />
                {
                  cart.map((product, i) => {
                    const price = product.prices.find((el) => el.currency.label === currency.label);
                    return (
                      <>
                        <CartItem
                          product={product}
                          onIncrement={onIncrement}
                          onDecrement={onDecrement}
                          price={price}
                          key={i}
                        />
                        <HrLine />
                      </>
                    );
                  })
                }
                <InLine>
                  <H3Text style={{ fontWeight: 400, marginRight: 6 }}>TAX 20%: </H3Text>
                  {' '}
                  <H3Text>{currency.symbol + percentage.toFixed(2)}</H3Text>
                </InLine>
                <InLine>
                  <H3Text style={{ fontWeight: 400, marginRight: 6 }}>Quantity: </H3Text>
                  {' '}
                  <H3Text>{quantity}</H3Text>
                </InLine>
                <InLine>
                  <H3Text style={{ fontWeight: 400, marginRight: 44 }}>Total: </H3Text>
                  {' '}
                  <H3Text>{currency.symbol + totalAmount.toFixed(2)}</H3Text>
                </InLine>
                <CommonButton>Order</CommonButton>
              </>
            ) : <div style={{ textAlign: 'center' }}>Cart is empty!</div>}
        </CartContainer>
      </Layout>
    );
  }
}

export default withCart(Cart);

const CartContainer = styled.div`
    margin: 50px 0;
`;

const InLine = styled.div`
    display: flex;
`;

const HrLine = styled.div`
    height: 1px;
    background: #E5E5E5;
    margin: 24px 0;
`;
