import React from 'react';
import styled from 'styled-components';

function H1Text ({children, style}) {
    const Heading = styled.h1`
        font-weight: 400;
        font-size: 42px;
        text-transform: capitalize;
    `;
    return (<Heading style={style}>{children}</Heading>)
}

export default H1Text;
