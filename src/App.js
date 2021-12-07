import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <NavBar />
      </header>
      <main className="App_main">
        {/* <ItemListContainer greeting="Bienvenido" /> */}
        {/* <ItemDetailContainer id="1" /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido" />} />
          <Route path="category/:categoryId" element={<ItemListContainer greeting="Bienvenido" />} />
          <Route path="category/:categoryId/detailProduct/:productId" element={<ItemDetailContainer />} />
          <Route path="detailProduct/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
