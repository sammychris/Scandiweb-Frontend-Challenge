import React from 'react';
import styled from 'styled-components';

function CommonBtn({children, style}) {
    const Button = styled.a`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 292px;
        height: 52px;
        background: #5ECE7B;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        color: #fff;
        text-decoration: none;
    `;
    return(
        <Button href="#" style={style}>{children}</Button>
    );
}

export default CommonBtn;
