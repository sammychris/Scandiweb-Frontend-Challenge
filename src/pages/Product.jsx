import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Image from '../components/Image';
import productImage from '../images/product-image.jpg';
import ProductSizes from '../components/ProductSizes';
import ProductColors from '../components/ProductColors';
import Attributes from '../components/Attributes';
import H2Text from '../components/H2Text';
import H3Text from '../components/H3Text';
import H4Text from '../components/H4Text';
import CommonBtn from '../components/CommonBtn';
import Paragraph from '../components/Paragraph';
import { useQuery, gql } from '@apollo/client';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


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

function Product () {
    let { id } = useParams();
    const { loading, error, data } = useQuery(QUERY(id));
    if (loading) return <div>Loading...</div>
    const { name, brand, gallery, description, category, attributes, prices} = data?.product;
    return (
        <Layout>
            <ProductContainer>
                <ProductImages>
                    <Gallery>
                        {
                            gallery.map(el => <SelectItem photo={el}/>)
                        }
                    </Gallery>
                    <Image photo={gallery[0]} style={{width:610, height:'auto', margin: '0 50px'}}/>
                </ProductImages>
                <ProductDetails>
                    <H2Text>{brand}</H2Text>
                    <H2Text style={{fontWeight: 400, marginBottom: 43}}>{name}</H2Text>
                    <Attributes attr={attributes}/>
                    <H4Text style={{marginBottom: 20}}>PRICE:</H4Text>
                    <H3Text style={{marginBottom: 30}}>$50.00</H3Text>
                    <CommonBtn style={{marginBottom: 40}}>Add to Cart</CommonBtn>
                    <Paragraph>{description}</Paragraph>
                </ProductDetails>
            </ProductContainer>
        </Layout>
    )
}

export default Product;


const QUERY = (id) => gql`
{
    product (id: "${id}" ) {
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
}`;