import React from 'react';
import styled from 'styled-components';

class ColorBox extends React.Component {
  render() {
    const {
      value, selected, style, onClick,
    } = this.props;
    return (<Box
      selected={selected}
      style={{
        ...style,
        background: value,
        border: selected? '2px solid #5ECE7B' : '1px solid #c3c3c3',
      }}
      onClick={onClick}
    />);
  }
}

export default ColorBox;

const Box = styled.a`
  display: flex;
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;
