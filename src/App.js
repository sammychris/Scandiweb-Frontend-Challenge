import Header from "./containers/Header";
// import ProductCart from "./components/ProductCard";
// import ColorBox from "./components/ColorBox";
// import DecrementBtn from "./components/DecrementBtn";
// import IncrementBtn from "./components/IncrementBtn";
// import SizeBox from "./components/SizeBox";
// import CommonBtn from "./components/CommonBtn";
// import SwipeArrowBtn from "./components/SwipeArrowBtn";
// import AddToCartBtn from "./components/AddToCartBtn";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Product from "./pages/Product";
import CartOverlay from "./components/CartOverlay";
import { useQuery, gql } from '@apollo/client';
import { setCurrencies } from './reducers/currencySlice';
import { setCategories } from './reducers/categorySlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_ALL);
  useEffect(() => {
    if(!data) return;
    const {categories, currencies} = data;
    dispatch(setCategories(categories));
    dispatch(setCurrencies(currencies));
  }, [data])
  if(loading) return (<div>Loading...</div>)
  return (
    <div className="App">
      {/* <ProductCart />
      <ColorBox color="#D3D2D5" />
      <ProductText title="Running Short" brand="Apollo"/>
      <SizeBox text="M"/>
      <DecrementBtn />
      <IncrementBtn />
      <CommonBtn text="Add to Cart"/>
      <SwipeArrowBtn />
      <AddToCartBtn /> */}
      {/* <Product />
      <Cart />
      <CartOverlay /> */}
     <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Category />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;


const GET_ALL = gql`
{
	categories {
    name
    products {
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
  }
  currencies {
    label
    symbol
  }
}`;

