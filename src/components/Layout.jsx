import React from 'react';
import styled from 'styled-components';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <LayoutStyle>
        {children}
      </LayoutStyle>
    );
  }
}

export default Layout;

const LayoutStyle = styled.div`
  max-width: 1230px;
  width: 90%;
  margin: 80px auto;
`;
