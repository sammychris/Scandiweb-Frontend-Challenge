import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import closeIcon from '../images/close-icon.svg';
import cartIcon from '../images/cart-icon.svg';
import { useSelector } from 'react-redux'

const Container = styled.header`
    height: 80px;
    max-width: 1230px;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Navigation = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    height: 100%;
    width: 234px;
    justify-content: space-around;
`;

const NavLink = styled.a`
    font-size: 16px;
    color: #1D1F22;
    text-decoration: none;
`;

const Image = styled.img`
    Width: 31.18px;
    Height: 28.62px;
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
    const {categories} = useSelector((state) => state.categories);
    const {currencies} = useSelector((state) => state.currencies);
    console.log(categories)
    return(
        <Container>
            <Navigation>
                {/* <NavLink href="#">WOMEN</NavLink>
                <NavLink href="#">MEN</NavLink>
                <NavLink href="#">KIDS</NavLink> */}
                {
                    categories?.map(el => <NavLink  href={`/${el.name}`}>{el.name.toUpperCase()}</NavLink>)
                }
            </Navigation>
            <Image src={logo} /> 
            <Actions>
                <Currency href='#'>
                    $<SelectCurrency src={closeIcon} />
                </Currency>
                <CartIcon href='#' />
                <ItemNumber>4</ItemNumber> 
            </Actions>
        </Container>
    );
}

export default Header;
