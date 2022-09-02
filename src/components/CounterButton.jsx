import React from 'react';
import styled from 'styled-components';

class CounterButton extends React.Component {
  render() {
    const {
      style, icon, onClick, children,
    } = this.props;
    return (
      <Box style={{...style, backgroundImage: `url(${icon})`}} onClick={onClick} href="#" >{children}</Box>
    );
  }
}

export default CounterButton;

const Box = styled.a`
  display: flex;
  width: 45px;
  height: 45px;
  background-size: cover;
`;
