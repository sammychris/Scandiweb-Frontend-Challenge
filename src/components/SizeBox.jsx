import React from 'react';
import styled from 'styled-components';

function SizeBox({size, style, active}) {
    const Button = styled.a`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 63px;
        height: 45px;
        border: 1px solid #1D1F22;
        text-decoration: none;
        margin-right: 12px;
    `;
    return(
        <Button href="#" style={style}>{size}</Button>
    );
}

export default SizeBox;
