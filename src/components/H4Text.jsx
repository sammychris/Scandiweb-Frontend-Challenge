import React from 'react';
import styled from 'styled-components';

function H4Text ({style, children}) {
    const Heading = styled.h3`
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 8px;
        text-transform: uppercase;
    `;
    return (<Heading style={style}>{children}</Heading>)
}

export default H4Text;
