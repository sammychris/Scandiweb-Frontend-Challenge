import React from 'react';
import styled from 'styled-components';

class CommonButton extends React.Component {
    render() {
        const {children, onClick, style} = this.props;
        return(
            <Button href="#" onClick={onClick} style={style}>{children}</Button>
        );
    }
}

export default CommonButton;


const Button = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 292px;
height: 52px;
background: #5ECE7B;
font-weight: 600;
font-size: 14px;
text-transform: uppercase;
color: #fff;
text-decoration: none;
`;
