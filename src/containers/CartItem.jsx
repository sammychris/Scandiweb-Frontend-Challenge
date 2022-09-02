import React from 'react';
import styled from 'styled-components';
import H2Text from '../components/H2Text';
import H3Text from '../components/H3Text';
import H4Text from '../components/H4Text';
import SizeBox from '../components/SizeBox';
import ColorBox from '../components/ColorBox';
import withCartItem from '../hoc/withCartItem';
import minusIcon from '../assets/minus-square.svg';
import plusIcon from '../assets/plus-square.svg';
import nextImg from '../assets/next-btn.svg';
import prevImg from '../assets/prev-btn.svg';
import CounterButton from '../components/CounterButton';

class CartItem extends React.Component {
  render() {
    const {
      onIncrement,
      onDecrement,
      onNext,
      onPrev,
      viewImageByIndex,
      product,
      price,
    } = this.props;
    return (
      <Product>
        <Details>
          <H2Text>{product.brand}</H2Text>
          <H2Text style={{ fontWeight: 400 }}>{product.name}</H2Text>
          <H3Text>{price.currency.symbol + price.amount.toFixed(2)}</H3Text>
          {
            product.attributes?.map((attr, i) => (
              <div id={attr.id} key={i}>
                <H4Text>
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
                        />
                      ))
                      : attr.items.map((item, i) => (
                        <SizeBox
                          selected={item.selected}
                          value={item.value}
                          id={item.id}
                          key={i}
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
            <CounterButton icon={plusIcon} onClick={(e) => onIncrement(e, product)} />
            <H3Text>{product.quantity}</H3Text>
            <CounterButton icon={minusIcon} onClick={(e) => onDecrement(e, product)} />
          </Counter>
          <CartImages src={product?.gallery[viewImageByIndex % product?.gallery.length]}>
            <SwipeContainer>
              {
                product?.gallery.length > 1 && (<>
                  <PrevBtn href="#" onClick={onPrev} />
                  <NextBtn href="#" onClick={onNext} />
                </>)
              }
            </SwipeContainer>
          </CartImages>
        </Functionality>
      </Product>
                                      
    );
  }
}

export default withCartItem(CartItem);

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
  margin-right: 24px;
`;
const Boxes = styled.div`
  display: flex;
  width: 290px;
`;

const SwipeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 56px;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;
const NextBtn = styled.a`
  display: flex;
  width: 24px;
  height: 24px;
  background: url(${nextImg});
`;
const PrevBtn = styled.a`
  display: flex;
  width: 24px;
  height: 24px;
  background: url(${prevImg});
`;
const CartImages = styled.div`
  width: 750px;
  height: 288px;
  width: 200px;
  background-image: url(${(props) => props.src});
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
`;
