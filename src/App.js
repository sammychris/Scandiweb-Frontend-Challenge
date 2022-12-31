import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Header from './containers/Header';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Product from './pages/Product';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <HashRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Navigate replace to="/category/all" />} />
            <Route exact path="/category/:name" element={<Category />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
