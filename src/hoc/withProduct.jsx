import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../reducers';


function withProduct (Component) {
    return function (props){
        const { id } = useParams();
        const dispatch = useDispatch();
        const [product, setProduct] = useState({});
        const [galleryIndex, setGalleryIndex] = useState(0);
        const { loading, error } = useQuery(QUERY(id), {onCompleted: (data) => setProduct(data.product)});
        const { cart, currency } = useSelector((state) => state.prodState);
       
        const addToCart = (e) => {
            e.preventDefault();
            const productIndex = cart.findIndex(el => el.id === product.id);
            if(productIndex === -1) {
                dispatch(setCart([...cart, { ...product, quantity: 1 }]));
                window.alert("You've successfully added a new product to Cart!");
            } else {
                const newCart = JSON.parse(JSON.stringify(cart));
                newCart[productIndex].quantity++;
                dispatch(setCart(newCart));
                window.alert("You've successfully added another quantity of this product in Cart!");
            }
        }
    
        const onSelect = ({e, attr, item }) => {
            e.preventDefault()
            const attributeIndex = product.attributes.findIndex(el => el.id === attr.id);  
            const newProduct = JSON.parse(JSON.stringify(product));

            newProduct.attributes[attributeIndex].items.map(el => {
                if(el.id === item.id) el.selected = true;
                else delete el.selected;
                return el;
            });
            setProduct(newProduct);
        }
        
        return (
            <Component
                product={product}
                loading={loading}
                error={error}
                currency={currency}
                addToCart={addToCart}
                onSelect={onSelect}
                galleryIndex={galleryIndex}
                setGalleryIndex={setGalleryIndex}
                {...props} 
            />);
    };
}

export default withProduct;


const QUERY = (id) => gql`
{
    product (id: "${id}" ) {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
    }
}`;