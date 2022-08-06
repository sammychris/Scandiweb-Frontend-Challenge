import React from 'react';
import styled from 'styled-components';
import SizeBox from './SizeBox';
import ColorBox from './ColorBox';
import H4Text from './H4Text';

function Attributes({attr}) {
    const ArrangeSizes = styled.div`
        display: flex;
        width: 290px;
        margin-bottom: 30px;
    `;
    console.log({attr})
    return (
        attr?.map((el, i) => (
            <div id={el.id} key={i}>
                <H4Text>{el.name}: </H4Text>
                <ArrangeSizes>
                    {
                        el.name.toLowerCase() === 'color'?
                        el.items.map((el, i) => <ColorBox value={el.value} id={el.id} key={i} />):
                        el.items.map((el, i) => <SizeBox value={el.value} id={el.id} key={i} />)
                    }  
                </ArrangeSizes> 
            </div>
            )
        ) 
    );
}

export default Attributes;