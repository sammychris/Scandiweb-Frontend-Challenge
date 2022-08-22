import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

class Logo extends React.Component {
  render() {
    const { style } = this.props;
    return (<Icon to="/" style={style} />);
  }
}

export default Logo;

const Icon = styled(Link)`
  display: flex;
  Width: 31.18px;
  Height: 28.62px;
  background: url(${logo});
`;
