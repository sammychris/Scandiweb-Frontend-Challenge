import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import closeIcon from '../assets/close-icon.svg';
import cartIcon from '../assets/cart-icon.svg';
import CartOverlay from './CartOverlay';
import CurrencySwitcher from '../components/CurrencySwitcher';
import Logo from '../components/Logo';
import withHeader from '../hoc/withHeader';

class Header extends React.Component {
  render() {
    const {
      cart,
      loading,
      data,
      currency,
      onChangeCurrency,
      currencyIconRef,
      cartIconRef,
      showCartRef,
      showCurrencyRef,
      showCurrency,
      showCart,
      onViewCart,
    } = this.props;

    if (loading) return '';
    return (
      <>
        <Container>
          <HeaderSection>
            <Navigation>
              {
                // <Link exact to={'samuel' | "/"} activeClassName="active">All</Link>
                data?.categories?.map((el, i) => <Link to={`/category/${el.name}`} key={i}  activeClassName='active'>{el.name}</Link>)
              }
            </Navigation>
            <Logo />
            <Actions>
              <Currency ref={currencyIconRef} href="#">
                {currency.symbol}
                <SelectCurrency src={closeIcon} />
              </Currency>
              <CartIcon href="#" ref={cartIconRef}>
                <ItemNumber>
                  {
                    cart.length ? cart?.map((el) => el.quantity)?.reduce((a, b) => a + b) : 0
                  }
                </ItemNumber>
              </CartIcon>
            </Actions>
            {showCart && <CartOverlay showCartRef={showCartRef} onViewCart={onViewCart} />}
            {showCurrency && (
              <CurrencySwitcher
                currencies={data?.currencies}
                currency={currency}
                onClick={onChangeCurrency}
                showCurrencyRef={showCurrencyRef}
              />
            )}
          </HeaderSection>
        </Container>
        {showCart && <Overlay />}
      </>
    );
  }
}

export default withHeader(Header);

const Container = styled.div`
  position: relative;
  z-index: 2;
  background: #fff;
`;

const HeaderSection = styled.header`
  height: 80px;
  max-width: 1230px;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(0 0 0 / 42%); 
  z-index: 1;
`;

const Navigation = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  width: 234px;
  justify-content: space-around;
`;

const Link = styled(NavLink)`
  font-size: 16px;
  color: #1D1F22;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    font-weight: bold;
  }
`;

const Actions = styled.div`
  width: 234px;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const Currency = styled.a`
  margin-right: 22px;
  display: flex;
  width: 25px;
  justify-content: space-between;
  align-items: center;
  color: #1D1F22;
  text-decoration: none;
`;

const SelectCurrency = styled.img`
  width: 6px;
  height: 3px;
`;

const CartIcon = styled.a`
  width: 20px;
  height: 20px;
  background: url(${cartIcon});
`;

const ItemNumber = styled.span`
  background: #1D1F22;
  border-radius: 50%;
  font-family: roboto;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  padding: 2px 6px;
  position: absolute;
  top: -10px;
  right: -10px;
`;
