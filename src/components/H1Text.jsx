import React from 'react';
import styled from 'styled-components';

class H1Text extends React.Component {
    render() {
        const {children, style} = this.props;
        return (<Heading style={style}>{children}</Heading>)
    }
}

export default H1Text;

const Heading = styled.h1`
    font-weight: 400;
    font-size: 42px;
    text-transform: capitalize;
`;