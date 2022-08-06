import React from 'react';
import styled from 'styled-components';

function H3Text ({style, children}) {
    const Heading = styled.h3`
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 8px;
    `;
    return (<Heading style={style}>{children}</Heading>)
}

export default H3Text;
