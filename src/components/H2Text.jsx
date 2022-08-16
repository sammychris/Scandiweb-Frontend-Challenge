import React from 'react';
import styled from 'styled-components';

class H2Text extends React.Component {
  render() {
    const { children, style } = this.props;
    return (<Heading style={style}>{children}</Heading>);
  }
}

export default H2Text;

const Heading = styled.h2`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 16px;
`;
