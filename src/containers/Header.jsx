import React from 'react';
import styled from 'styled-components';
import closeIcon from '../images/close-icon.svg';
import cartIcon from '../images/cart-icon.svg';
import CartOverlay from '../components/CartOverlay';
import { useQuery, gql } from '@apollo/client';
import Logo from '../components/Logo';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

const Container = styled.header`
    height: 80px;
    max-width: 1230px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh; 
    background: rgb(0 0 0 / 42%); 
`

const Navigation = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    height: 100%;
    width: 234px;
    justify-content: space-around;
`;

const NavLink = styled(Link)`
    font-size: 16px;
    color: #1D1F22;
    text-decoration: none;
    text-transform: uppercase;
`;

const Actions = styled.div`
    width: 234px;
    display: flex;
    justify-content: flex-end;
    position: relative;
`; 

const Currency = styled.a`
    margin-right: 22px;
    display: flex;
    width: 25px;
    justify-content: space-between;
    align-items: center;
    color: #1D1F22;
    text-decoration: none;
`;

const SelectCurrency = styled.img`
    width: 6px;
    height: 3px;
`;

const CartIcon = styled.a`
    width: 20px;
    height: 20px;
    background: url(${cartIcon});
`;

const ItemNumber = styled.span`
    background: #1D1F22;
    border-radius: 50%;
    font-family: roboto;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    padding: 2px 6px;
    position: absolute;
    top: -10px;
    right: -10px;
`;

function Header () {
    const { loading, error, data } = useQuery(QUERY);
    const { categories } = data;
    return(
        <>
        <Container>
            <Navigation>
                {
                    categories?.map(el => <NavLink to={`/category/${el.name}`}>{el.name}</NavLink>)
                }
            </Navigation>
            <Logo />
            <Actions>
                <Currency href='#'>
                    $<SelectCurrency src={closeIcon} />
                </Currency>
                <CartIcon href='#' />
                <ItemNumber>4</ItemNumber> 
            </Actions>
            {/* <CartOverlay /> */}
        </Container>
        {/* <Overlay /> */}
        </>
    );
}

export default Header;


const QUERY = gql`
{
	categories {
        name
    }

}`;

