import React from 'react';
import styled from 'styled-components';
import ColorBox from './ColorBox';
import H4Text from './H4Text';

function ProductColors(props) {
    const { colors } = props;
    const ArrangeColors = styled.div`
        display: flex;
        width: 290px;
    `;
    return (
        <div>
            <H4Text>Colors:</H4Text>
            <ArrangeColors>
                {
                    colors.map((color, i) => {
                        return <ColorBox color={color} {...props} key={i} />
                    })
                }  
            </ArrangeColors> 
        </div>   
    );
}

export default ProductColors;
