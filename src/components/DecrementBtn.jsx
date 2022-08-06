import React from 'react';
import styled from 'styled-components';
import minusIcon from '../images/minus-square.svg';

function DecrementBtn ({style}) {
    const Box = styled.a`
        display: flex;
        width: 45px;
        height: 45px;
        background: url(${minusIcon});
        background-size: cover;
    `;
    return (
        <Box style={style} href="#" />
    )
}

export default DecrementBtn;
