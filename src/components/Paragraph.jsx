import React from 'react';
import styled from 'styled-components';


class Paragraph extends React.Component{
    render() {
        const {children} = this.props;
        return (<Text dangerouslySetInnerHTML={{__html: children}} />)
    }
}

export default Paragraph;

const Text = styled.div`
    font-weight: 400px;
    font-size: 16px;
`;