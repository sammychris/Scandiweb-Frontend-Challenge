import React from 'react';
import styled from 'styled-components';


function ColorBox ({color, style}) {
    const Box = styled.a`
        display: flex;
        width: 32px;
        height: 32px;
        background: ${color};
        margin-right: 8px;
    `;
    return (<Box href="#" style={style}/>);
}

export default ColorBox;
