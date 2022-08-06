import React from 'react';
import styled from 'styled-components';
import plusIcon from '../images/plus-square.svg';

function IncrementBtn ({style}) {
    const Box = styled.a`
        display: flex;
        width: 45px;
        height: 45px;
        background: url(${plusIcon});
        background-size: contain;
    `;
    return (
        <Box style={style} href="#" />
    )
}

export default IncrementBtn;

