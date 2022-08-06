import React from 'react';
import styled from 'styled-components';
import nextImg from '../images/next-btn.svg';
import prevImg from '../images/prev-btn.svg';

function SwipeArrowBtn({prev, next}) {
    const SwipeContainer = styled.div`
        display: flex;
        justify-content: space-between;
        width: 56px;
        position: absolute;
        right: 16px;
        bottom: 16px;
    `;
    const NextBtn = styled.a`
        display: flex;
        width: 24px;
        height: 24px;
        background: url(${nextImg});
    `;
    const PrevBtn = styled.a`
        display: flex;
        width: 24px;
        height: 24px;
        background: url(${prevImg});
    `;
    return(
        <SwipeContainer>
            <PrevBtn href="" onClick={prev} />
            <NextBtn href="" onClick={next} />
        </SwipeContainer>
       
    );
}

export default SwipeArrowBtn;
 