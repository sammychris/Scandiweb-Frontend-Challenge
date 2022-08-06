import React from 'react';
import styled from 'styled-components';
import cartIcon from '../images/add-to-cart.svg';

function AddToCartBtn({style}) {
    const Button = styled.a`
        display: flex;
        width: 52px;
        height: 52px;
        background: url(${cartIcon});
    `;
    return(
        <Button href="#" style={{style}}/>
    );
}

export default AddToCartBtn;
