import React from 'react';
import styled from 'styled-components';

class H4Text extends React.Component {
  render() {
    const { style, children } = this.props;
    return (<Heading style={style}>{children}</Heading>);
  }
}

export default H4Text;

const Heading = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;
