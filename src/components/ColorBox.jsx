import React from 'react';
import styled from 'styled-components';


class ColorBox extends React.Component {
    render() {
        const {value, selected, style, onClick} = this.props;
        return (<Box value={value} selected={selected} href="#" style={style} onClick={onClick}/>);
    }  
}


export default ColorBox;

const Box = styled.a`
    display: flex;
    width: 32px;
    height: 32px;
    background: ${props => props.value};
    margin-right: 8px;
    border: ${props => (props.selected? '2px solid #5ECE7B': 0)};
`;
