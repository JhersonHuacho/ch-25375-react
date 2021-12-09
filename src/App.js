import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { CartProvider } from './CartProvider';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

const initialState = [];
function App() {
  const [cart, setCart] = useState(initialState);

  return (
    <CartProvider value={{ cart, setCart }}>
      <div className="App">
        <header className="App__header">
          <NavBar />
        </header>
        <main className="App_main">
          {/* <ItemListContainer greeting="Bienvenido" /> */}
          {/* <ItemDetailContainer id="1" /> */}
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenido" />}
            />
            <Route path="category/:categoryId" element={<ItemListContainer greeting="Bienvenido" />} />
            <Route path="category/:categoryId/detailProduct/:productId" element={<ItemDetailContainer />} />
            <Route path="category/:categoryId/detailProduct/:productId/cart" element={<Cart />} />
            <Route path="detailProduct/:productId" element={<ItemDetailContainer />} />
            <Route path="detailProduct/:productId/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
