import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './containers/Header';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Product from './pages/Product';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Category />} />
            <Route exact path="/category/:name" element={<Category />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
