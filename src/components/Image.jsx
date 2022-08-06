import React from 'react';
import styled from 'styled-components';


function Image({photo, style}) {
    const Image = styled.img`
        width: 100%;
        height: auto;
        display: block;
    `;
    return(
        <Image src={photo} style={style} />
    );
}

export default Image;
