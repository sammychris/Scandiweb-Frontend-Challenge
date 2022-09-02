import React from 'react';
import styled from 'styled-components';

class SizeBox extends React.Component {
  render() {
    const {
      value, selected, style, onClick,
    } = this.props;
    return (
      <Button
        style={{
          ...style,
          color: selected ? '#fff' : '#1D1F22',
          background: selected ? '#1D1F22' : '#fff',
        }}
        onClick={onClick}
      >
        {value}
      </Button>
    );
  }
}

export default SizeBox;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 45px;
  border: 1px solid #1D1F22;
  text-decoration: none;
  margin-right: 12px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
