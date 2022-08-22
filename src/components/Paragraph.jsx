import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

class Paragraph extends React.Component {
  render() {
    const { children } = this.props;
    return (<Text>{parse(children)}</Text>);
  }
}

export default Paragraph;

const Text = styled.div`
  font-weight: 400px;
  font-size: 16px;
`;
