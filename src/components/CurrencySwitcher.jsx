import React from 'react';
import styled from 'styled-components';

class CurrencySwitcher extends React.Component {
  render() {
    const {
      currencies, currency, onClick, showCurrencyRef,
    } = this.props;
    return (
      <CurrencyContainer ref={showCurrencyRef}>
        {
          currencies?.map((curr, i) => (
            <Currency
              selected={curr.label === currency.label}
              href="#"
              onClick={(e) => onClick(e, curr)}
              key={i}
            >
              {`${curr.symbol} ${curr.label}`}
            </Currency>
          ))
        }
      </CurrencyContainer>
    );
  }
}

export default CurrencySwitcher;

const CurrencyContainer = styled.div`
  width: 114px;
  box-shadow: 0px 2px 5px 0px #c7c7c7;
  background: #fff;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 2;
`;

const Currency = styled.a`
  display: flex;
  padding: 8px 0;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0em;
  justify-content: center;
  text-decoration: none;
  color: #1D1F22;
  background: ${(props) => (props.selected && '#EEEEEE')};
  &:hover {
    background: #eeeeee8c;
  }
`;
