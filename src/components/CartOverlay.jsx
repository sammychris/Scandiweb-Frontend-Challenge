import React from 'react';
import styled from 'styled-components';
import H1Text from './H1Text';
import Layout from './Layout';
import productImage from '../images/product-image.jpg';
import ProductSizes from './ProductSizes';
import ProductColors from './ProductColors';
import H2Text from './H2Text';
import H3Text from './H3Text';
import H4Text from './H4Text';
import CommonBtn from './CommonBtn';
import SwipeArrowBtn from './SwipeArrowBtn';
import IncrementBtn from './IncrementBtn';
import DecrementBtn from './DecrementBtn';
import SizeBox from './SizeBox';
import ColorBox from './ColorBox';



const CartContainer = styled.div`
    margin: 50px 0;
    width: 325px;
    padding: 32px 16px;
    height: 677px;
    background: #fff;
    position: absolute;
    top: 30px;
    right: 0;
    z-index: 1;
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
const Picture = styled.div`
    height: 190px;
    width: 121px;
    background-image: url(${productImage});
`;
const InLine = styled.div`
    display: flex;
`;
const HrLine = styled.div`
    height: 1px;
    background: #E5E5E5;
    margin: 24px 0;
`;
const Arrange = styled.div`
    display: flex;
    width: 140px;
`;

class CartOverlay extends React.Component {
    render() {
      return (
        <CartContainer>
            <HrLine/>
            <Product>
                <Details>
                    <H4Text style={{fontWeight: 300, fontSize: 16}}>Apollo</H4Text>
                    <H4Text style={{fontWeight: 300, fontSize: 16}}>Running Short</H4Text>
                    <H4Text style={{fontWeight: 600, fontSize: 16}}>$50.00</H4Text>
                    <H4Text style={{fontWeight: 300, fontSize: 16}}>Sizes:</H4Text>
                    <Arrange>
                        {
                            ['M', 'S', 'XL'].map((size, i) => {
                                return <SizeBox size={size} key={i} style={{weight:400, fontSize: 14, width: 24, height: 24, margin: '0 8px 8px 0'}}/>
                            })
                        }  
                    </Arrange>
                    <H4Text style={{fontWeight: 300, fontSize: 16}}>Colors:</H4Text>
                    <Arrange>
                        {
                            ['#D3D2D5', '#2B2B2B', '#0F6450'].map((color, i) => {
                                return <ColorBox color={color} key={i} style={{weight:400, fontSize: 14, width: 24, height: 24, marginRight: 8}}/>
                            })
                        }  
                    </Arrange>
                </Details>
                <Functionality>
                    <Counter>
                    <IncrementBtn style={{width: 24, height: 24}} />
                        <H3Text style={{fontSize: 16}}>1</H3Text>
                        <DecrementBtn style={{width: 24, height: 24}} />
                    </Counter>
                    <Picture>
                    </Picture>
                </Functionality>
            </Product>
            <HrLine/>
            <Product>
                <Details>
                    <H4Text style={{fontWeight: 300, fontSize: 16}}>Jupiter</H4Text>
                    <H4Text style={{fontWeight: 300, fontSize: 16}}>Wayfarer</H4Text>
                    <H4Text style={{fontWeight: 600, fontSize: 16}}>$50.00</H4Text>
                    <Arrange>
                        {
                            ['M', 'S', 'XL'].map((size, i) => {
                                return <SizeBox size={size} key={i} style={{weight:400, fontSize: 14, width: 24, height: 24, margin: '0 8px 8px 0'}}/>
                            })
                        }  
                    </Arrange>
                    <H4Text style={{fontWeight: 300, fontSize: 16}}>Colors:</H4Text>
                    <Arrange>
                        {
                            ['#D3D2D5', '#2B2B2B', '#0F6450'].map((color, i) => {
                                return <ColorBox color={color} key={i} style={{weight:400, fontSize: 14, width: 24, height: 24, marginRight: 8}}/>
                            })
                        }  
                    </Arrange>
                </Details>
                <Functionality>
                    <Counter>
                        <IncrementBtn style={{width: 24, height: 24}} />
                        <H3Text style={{fontSize: 16}}>2</H3Text>
                        <DecrementBtn style={{width: 24, height: 24}} />
                    </Counter>
                    <Picture>
                    </Picture>
                </Functionality>
            </Product>
            <HrLine/>
            <InLine style={{justifyContent: 'space-between'}}>
                <H3Text style={{fontSize: 16}}>Total </H3Text>
                <H3Text style={{fontSize: 16}}>$200.00</H3Text>
            </InLine>
            <InLine style={{justifyContent: 'space-between'}}>
                <CommonBtn style={{width: 140, height: 43, background: '#fff', border: '1px solid #1D1F22', color:' #1D1F22'}}>VIEW BAG</CommonBtn>
                <CommonBtn style={{width: 140, height: 43}}>CHECK OUT</CommonBtn>
            </InLine>
        </CartContainer>
      )
    }
}

export default CartOverlay;
