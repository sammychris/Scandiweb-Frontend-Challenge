import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";


function Logo ({style}) {
    const Icon = styled(Link)`
        display: flex;
        Width: 31.18px;
        Height: 28.62px;
        background: url(${logo});
    `;
    return (<Icon to="/" style={style}/>);
}

export default Logo;
