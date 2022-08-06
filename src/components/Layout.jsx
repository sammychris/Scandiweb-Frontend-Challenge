import React from 'react';
import styled from 'styled-components';

function Layout ({children}) {
    const LayoutStyle = styled.div`
        max-width: 1230px;
        width: 90%;
        margin: 80px auto;
    `;
    return(
        <LayoutStyle>
            {children}
        </LayoutStyle>
    )
}

export default Layout;
