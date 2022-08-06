import React from 'react';
import styled from 'styled-components';

function H2Text ({children, style}) {
    const Heading = styled.h2`
        font-weight: 600;
        font-size: 30px;
        margin-bottom: 16px;
    `;
    return (<Heading style={style}>{children}</Heading>);
}

export default H2Text;
