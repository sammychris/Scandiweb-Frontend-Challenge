import React from 'react';
import styled from 'styled-components';
import SizeBox from './SizeBox';
import H4Text from './H4Text';

function ProductSizes(props) {
    const { sizes } = props;
    const ArrangeSizes = styled.div`
        display: flex;
        width: 290px;
    `;
    return (
        <div>
            <H4Text>Sizes:</H4Text>
            <ArrangeSizes>
                {
                    sizes.map((size, i) => {
                        return <SizeBox size={size} {...props} key={i} />
                    })
                }  
            </ArrangeSizes> 
        </div>   
    );
}

export default ProductSizes;
