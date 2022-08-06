import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import productImage from '../images/product-image.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 16px;
    height: 444px;
    margin: 40px auto;
    &:hover {
        box-shadow: 0px 2px 5px 0px #c7c7c7;
    }
`;

const ProductUrl = styled(Link)`
    text-decoration: none;
`;

const Title = styled.p`
    font-weight: 300;
    font-size: 18px;
    color: #1D1F22;
    margin-top: 15px;
    padding: 10px 0;
`;

const PriceTag = styled.span`
    font-weight: 600;
    font-size: 18px;
    color: #1D1F22;
    padding: 10px 0;
`;

function Card ({id, photo, name, price}) {
    return (
        <Container>
            <ProductUrl to={'/product/'+id}>
                <Image photo={photo} />
                <Title>{name}</Title>
                <PriceTag>$50.00</PriceTag>
            </ProductUrl>
        </Container>
    )
}

export default Card;

