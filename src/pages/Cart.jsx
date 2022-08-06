import React from 'react';
import styled from 'styled-components';
import H1Text from '../components/H1Text';
import Layout from '../components/Layout';
import Image from '../components/Image';
import productImage from '../images/product-image.jpg';
import nextImage from '../images/next-btn.svg';
import prevImage from '../images/prev-btn.svg';
import ProductSizes from '../components/ProductSizes';
import ProductColors from '../components/ProductColors';
import H2Text from '../components/H2Text';
import H3Text from '../components/H3Text';
import CommonBtn from '../components/CommonBtn';
import Paragraph from '../components/Paragraph';
import SwipeArrowBtn from '../components/SwipeArrowBtn';
import IncrementBtn from '../components/IncrementBtn';
import DecrementBtn from '../components/DecrementBtn';



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
const Picture = styled.div`
    width: 750px;
    height: 288px;
    width: 200px;
    background-image: url(${productImage});
    position: relative;
`;
const InLine = styled.div`
    display: flex;
`;
const HrLine = styled.div`
    height: 1px;
    background: #E5E5E5;
    margin: 24px 0;
`;

class Cart extends React.Component {
    render() {
      return (
        <Layout>
            <H1Text>CART</H1Text>
            <CartContainer>
                <HrLine/>
                <Product>
                    <Details>
                        <H2Text>Apollo</H2Text>
                        <H2Text style={{fontWeight: 400}}>Running Short</H2Text>
                        <H3Text>$50.00</H3Text>
                        <ProductSizes sizes={['M', 'S', 'XL']} style={{marginBottom: 10}} />
                        <ProductColors colors={['#D3D2D5', '#2B2B2B', '#0F6450']} />
                    </Details>
                    <Functionality>
                        <Counter>
                            <IncrementBtn />
                            <H3Text>1</H3Text>
                            <DecrementBtn />
                        </Counter>
                        <Picture>
                            <SwipeArrowBtn />
                        </Picture>
                    </Functionality>
                </Product>
                <HrLine/>
                <Product>
                    <Details>
                        <H2Text>Jupiter</H2Text>
                        <H2Text style={{fontWeight: 400}}>Wayfarer</H2Text>
                        <H3Text>$50.00</H3Text>
                        <ProductSizes sizes={['M', 'S', 'XL']} style={{marginBottom: 10}} />
                        <ProductColors colors={['#D3D2D5', '#2B2B2B', '#0F6450']} />
                    </Details>
                    <Functionality>
                        <Counter>
                            <IncrementBtn />
                            <H3Text>2</H3Text>
                            <DecrementBtn />
                        </Counter>
                        <Picture>
                            <SwipeArrowBtn />
                        </Picture>
                    </Functionality>
                </Product>
                <HrLine/>
                <InLine>
                    <H3Text style={{fontWeight: 400, marginRight: 6}}>TAX 20%: </H3Text> <H3Text>$42.00</H3Text>
                </InLine>
                <InLine>
                    <H3Text style={{fontWeight: 400, marginRight: 6}}>Quantity: </H3Text> <H3Text>3</H3Text>
                </InLine>
                <InLine>
                    <H3Text style={{fontWeight: 400, marginRight: 44}}>Total: </H3Text> <H3Text>$200.00</H3Text>
                </InLine>
                <CommonBtn>Order</CommonBtn>
            </CartContainer>
        </Layout>
      )
    }
}

export default Cart;
