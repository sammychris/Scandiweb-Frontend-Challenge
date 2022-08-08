import React from 'react';
import styled from 'styled-components';


class H3Text extends React.Component{
    render() {
        const {style, children} = this.props
        return (<Heading style={style}>{children}</Heading>)
    }
}

export default H3Text;

const Heading = styled.h3`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 8px;
`;
