import React from 'react';
import styled from 'styled-components';


function Paragraph ({weight='400', size='16px', children}) {
    const Text = styled.span`
        font-weight: ${weight};
        font-size: ${size};
    `;
    return (<Text>{children}</Text>)
}

export default Paragraph;
