import React from 'react';
import styled from 'styled-components';

class Loader extends React.Component {
  render() {
    return (
      <LayoutStyle>
        Loading...
      </LayoutStyle>
    );
  }
}

export default Loader;

const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
