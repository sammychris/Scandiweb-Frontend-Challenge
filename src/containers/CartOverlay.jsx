import React from 'react';
import styled from 'styled-components';
import H3Text from '../components/H3Text';
import H4Text from '../components/H4Text';
import CommonButton from '../components/CommonButton';
import SizeBox from '../components/SizeBox';
import ColorBox from '../components/ColorBox';
import withCart from '../hoc/withCart';
import minusIcon from '../assets/minus-square.svg';
import plusIcon from '../assets/plus-square.svg';
import CounterButton from '../components/CounterButton';

class CartOverlay extends React.Component {
  render() {
    const {
      cart,
      currency,
      onIncrement,
      onDecrement,
      onViewCart,
      totalAmount,
      showCartRef,
    } = this.props;

    return (
      <CartContainer ref={showCartRef}>
        {
          cart.length
            ? (
              <>
                <HrLine />
                {
                  cart.map((product, i) => {
                    const price = product.prices.find((el) => el.currency.label === currency.label);
                    return (
                      <>
                        <Product key={i}>
                          <Details>
                            <H4Text style={{ fontWeight: 300, fontSize: 16 }}>{product.brand}</H4Text>
                            <H4Text style={{ fontWeight: 300, fontSize: 16 }}>{product.name}</H4Text>
                            <H4Text style={{ fontWeight: 600, fontSize: 16 }}>{price.currency.symbol + price.amount.toFixed(2)}</H4Text>
                            {
                              product.attributes?.map((attr, i) => (
                                <div id={attr.id} key={i}>
                                  <H4Text style={{ fontWeight: 300, fontSize: 16 }}>
                                    {attr.name}
                                                          :
                                    {' '}
                                  </H4Text>
                                  <Boxes>
                                    {
                                      attr.type === 'swatch'
                                        ? attr.items.map((item, i) => (
                                          <ColorBox
                                            selected={item.selected}
                                            value={item.value}
                                            id={item.id}
                                            key={i}
                                            style={{
                                              weight: 400, fontSize: 14, width: 24, height: 24, marginRight: 8,
                                            }}
                                          />
                                        ))
                                        : attr.items.map((item, i) => (
                                          <SizeBox
                                            selected={item.selected}
                                            value={item.value}
                                            id={item.id}
                                            key={i}
                                            style={{
                                              weight: 400, fontSize: 14, width: 24, height: 24, margin: '0 8px 8px 0',
                                            }}
                                          />
                                        ))
                                    }
                                  </Boxes>
                                </div>
                              ))
                            }
                          </Details>
                          <Functionality>
                            <Counter>
                              <CounterButton icon={plusIcon} onClick={(e) => onIncrement(e, product)} style={{ width: 24, height: 24 }} />
                              <H3Text style={{ fontSize: 16 }}>{product.quantity}</H3Text>
                              <CounterButton icon={minusIcon} onClick={(e) => onDecrement(e, product)} style={{ width: 24, height: 24 }} />
                            </Counter>
                            <ProductImage src={product.gallery[0]} />
                          </Functionality>
                        </Product>
                        <HrLine />
                      </>
                    );
                  })
                }
                <InLine style={{ justifyContent: 'space-between' }}>
                  <H3Text style={{ fontSize: 16 }}>Total </H3Text>
                  <H3Text style={{ fontSize: 16 }}>{currency.symbol + totalAmount.toFixed(2)}</H3Text>
                </InLine>
                <InLine style={{ justifyContent: 'space-between' }}>
                  <CommonButton
                    onClick={onViewCart}
                    style={{
                      width: 140, height: 43, background: '#fff', border: '1px solid #1D1F22', color: ' #1D1F22',
                    }}
                  >
                    VIEW BAG
                  </CommonButton>
                  <CommonButton style={{ width: 140, height: 43 }}>CHECK OUT</CommonButton>
                </InLine>
              </>
            ) : <div style={{ textAlign: 'center' }}>Cart is empty!</div>
        }
      </CartContainer>
    );
  }
}

export default withCart(CartOverlay);

const CartContainer = styled.div`
  width: 325px;
  padding: 32px 16px;
  background: #fff;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 3;
  max-height: 50vh;
  overflow: auto;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Details = styled.div`
  width: 292px;
`;
const Functionality = styled.div`
  display: flex;
`;
const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 16px;
`;
const ProductImage = styled.div`
  height: 190px;
  width: 121px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const InLine = styled.div`
  display: flex;
`;
const HrLine = styled.div`
  height: 1px;
  background: #E5E5E5;
  margin: 24px 0;
`;
const Boxes = styled.div`
  display: flex;
  width: 140px;
`;
