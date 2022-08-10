import React from 'react';
import styled from 'styled-components';

class CounterButton  extends React.Component {
    render() {
        const {style, icon, onClick, children} = this.props;
        return (
            <Box style={style} onClick={onClick} href="#" src={icon}>{children}</Box>
        )
    }
}

export default CounterButton;

const Box = styled.a`
    display: flex;
    width: 45px;
    height: 45px;
    background: url(${props => props.src});
    background-size: cover;
`;
