//context
import ProductContext from './context/ProductContext';
import CartContextporvider from './context/CartContextporvider';

//
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
// componenets
import Store from './components/Store';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
function App() {
  return (

    <ProductContext>
      <CartContextporvider>
        <Navbar />
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/Cart" element={<ShopCart />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>

      </CartContextporvider>
    </ProductContext>
  );
}

export default App;
