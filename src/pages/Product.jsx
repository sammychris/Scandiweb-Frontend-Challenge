import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Image from '../components/Image';
import productImage from '../images/product-image.jpg';
import ProductSizes from '../components/ProductSizes';
import ProductColors from '../components/ProductColors';
import H2Text from '../components/H2Text';
import H3Text from '../components/H3Text';
import H4Text from '../components/H4Text';
import CommonBtn from '../components/CommonBtn';
import Paragraph from '../components/Paragraph';

const ProductContainer = styled.div`
    display: flex;
`;
const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    width: 79px;
`;
const ProductImages = styled.div`
    display: flex;
    width: 750px;
`;
const ProductDetails = styled.div`
    width: 292px;
    margin: 0 50px;
`;

const SelectItem = ({photo}) => {
    const Item = styled.a`
        display: flex;
        width: 79px;
        height: 80px;
        background-image: url(${photo});
        background-size: cover;
        margin-bottom: 20px;
    `;
    return(
        <Item href="" />
    )
}

class Product extends React.Component {
    constructor(){
        super();
    }
    
    render() {
      return (
        <Layout>
            <ProductContainer>
                <ProductImages>
                    <Gallery>
                        <SelectItem photo={productImage}/>
                        <SelectItem photo={productImage}/>
                        <SelectItem photo={productImage}/>
                    </Gallery>
                    <Image photo={productImage} style={{width:610, height:511, margin: '0 50px'}}/>
                </ProductImages>
                <ProductDetails>
                    <H2Text>Apollo</H2Text>
                    <H2Text style={{fontWeight: 400, marginBottom: 43}}>Running Short</H2Text>
                    <ProductSizes sizes={['M', 'S', 'XL']} style={{marginBottom: 24}} />
                    <ProductColors colors={['#D3D2D5', '#2B2B2B', '#0F6450']} style={{marginBottom: 36}} />
                    <H4Text style={{marginBottom: 20}}>PRICE:</H4Text>
                    <H3Text style={{marginBottom: 30}}>$50.00</H3Text>
                    <CommonBtn style={{marginBottom: 40}}>Add to Cart</CommonBtn>
                    <Paragraph>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</Paragraph>
                </ProductDetails>
            </ProductContainer>
        </Layout>
      )
    }
}

export default Product;
