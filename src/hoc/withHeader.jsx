import React, { useEffect, useState, useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrency } from '../reducers';
import { useNavigate } from 'react-router-dom';


function withHeader (Component) {
    return function (props) {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const [showCurrency, setShowCurrency] = useState(false);
        const [showCart, setShowCart] = useState(false);
        const currencyIconRef = useRef(null);
        const cartIconRef = useRef(null);
        const showCurrencyRef = useRef(null);
        const showCartRef = useRef(null);
        const {cart, currency} = useSelector((state) => state.prodState);
        const { loading, error, data } = useQuery(QUERY);

        useEffect(() => {
            document.addEventListener('click', handleClicks, true);
            return () => {
                document.removeEventListener('click', handleClicks, true);
            }
        });

        const handleClicks = (e) => {
            let isCurrency, isCart;
            if (currencyIconRef.current.contains(e.target)) {
                isCurrency = !showCurrency;
                isCart = false;
            }
            else if (cartIconRef.current.contains(e.target)) {
                isCart = !showCart;
                isCurrency = false;
            }
            else if (showCartRef.current) {
                isCart = showCartRef.current.contains(e.target);
                isCurrency = false;
            }
            else if (showCurrencyRef.current) {
                isCurrency = showCurrencyRef.current.contains(e.target);
                isCart = false;
            }
            setShowCurrency(isCurrency);
            setShowCart(isCart);
        }
        
        const onChangeCurrency = (e, currency) => {
            e.preventDefault();
            setShowCurrency(false);
            dispatch(setCurrency(currency));
        }

        const onViewCart = (e) => {
            e.preventDefault();
            setShowCart(false);
            navigate('/cart');
        }
        
        return (
            <Component
                cart={cart}
                loading={loading}
                error={error}
                data={data}
                onChangeCurrency={onChangeCurrency}
                currency={currency}
                currencyIconRef={currencyIconRef}
                cartIconRef={cartIconRef}
                showCartRef={showCartRef}
                showCurrencyRef={showCurrencyRef}
                showCurrency={showCurrency}
                showCart={showCart}
                onViewCart={onViewCart}
                {...props}
            />
        );
    }
}

export default withHeader;

const QUERY = gql`
{
	categories {
        name
    }

    currencies {
        label
        symbol
    }

}`;

