import React from 'react';
import styled from 'styled-components';
import H1Text from '../components/H1Text';
import Layout from '../components/Layout';
import H2Text from '../components/H2Text';
import H3Text from '../components/H3Text';
import H4Text from '../components/H4Text';
import CommonButton from '../components/CommonButton';
import SizeBox from '../components/SizeBox';
import ColorBox from '../components/ColorBox';
import withCart from '../hoc/withCart';
import minusIcon from '../assets/minus-square.svg';
import plusIcon from '../assets/plus-square.svg';
import nextImg from '../assets/next-btn.svg';
import prevImg from '../assets/prev-btn.svg';
import CounterButton from '../components/CounterButton';


class Cart extends React.Component {
    render () {
        const {
            cart,
            onSelect,
            onIncrement,
            onDecrement,
            quantity,
            totalAmount,
            percentage,
            currency,
            onNext,
            onPrev,
            viewImageByIndex
        } = this.props;
        return (
            <Layout>
                <H1Text>CART</H1Text>
                <CartContainer>
                    { cart.length?
                        (<>
                            <HrLine/>
                            {
                                cart.map((product, i) => {
                                    const price = product.prices.find(el => el.currency.label === currency.label);
                                    return (
                                        <>
                                            <Product>
                                                <Details>
                                                    <H2Text>{product.brand}</H2Text>
                                                    <H2Text style={{fontWeight: 400}}>{product.name}</H2Text>
                                                    <H3Text>{price.currency.symbol + (product.quantity * price.amount).toFixed(2)}</H3Text>
                                                    {
                                                        product.attributes?.map((attr, i) => (
                                                            <div id={attr.id} key={i}>
                                                                <H4Text>{attr.name}: </H4Text>
                                                                <Boxes>
                                                                    {
                                                                        attr.type === 'swatch'?
                                                                        attr.items.map((item, i) => (
                                                                            <ColorBox
                                                                                selected={item.selected}
                                                                                value={item.value}
                                                                                id={item.id}
                                                                                key={i}
                                                                                onClick={e => onSelect({e, product, attr, item})}
                                                                            />
                                                                        )):
                                                                        attr.items.map((item, i) => (
                                                                            <SizeBox
                                                                                selected={item.selected}
                                                                                value={item.value} 
                                                                                id={item.id}
                                                                                key={i}
                                                                                onClick={e => onSelect({e, product, attr, item})}
                                                                            />
                                                                        ))
                                                                    }  
                                                                </Boxes> 
                                                            </div>
                                                            )
                                                        )
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
                                                            <PrevBtn href="#" onClick={onPrev} />
                                                            <NextBtn href="#" onClick={onNext} />
                                                        </SwipeContainer>
                                                    </CartImages>
                                                </Functionality>
                                            </Product>
                                            <HrLine/>
                                        </>
                                    )
                                })
                            }
                            <InLine>
                                <H3Text style={{fontWeight: 400, marginRight: 6}}>TAX 20%: </H3Text> <H3Text>{currency.symbol + percentage.toFixed(2)}</H3Text>
                            </InLine>
                            <InLine>
                                <H3Text style={{fontWeight: 400, marginRight: 6}}>Quantity: </H3Text> <H3Text>{quantity}</H3Text>
                            </InLine>
                            <InLine>
                                <H3Text style={{fontWeight: 400, marginRight: 44}}>Total: </H3Text> <H3Text>{currency.symbol + totalAmount.toFixed(2)}</H3Text>
                            </InLine>
                            <CommonButton>Order</CommonButton>
                        </>): <div style={{textAlign: 'center'}}>Cart is empty!</div>
                    }
                </CartContainer>
            </Layout>
        )
    }
}

export default withCart(Cart);



const CartContainer = styled.div`
    margin: 50px 0;
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
    margin-right: 24px;
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
    background-image: url(${props => props.src});
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
`;

