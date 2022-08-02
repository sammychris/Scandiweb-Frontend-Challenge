import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";

class Logo extends React.Component{
    render() {
        const {style} = this.props;
        return (<Icon to="/" src={logo} style={style}/>);
    }
}

export default Logo;

const Icon = styled(Link)`
    display: flex;
    Width: 31.18px;
    Height: 28.62px;
    background: url(${props => props.src});
`;
