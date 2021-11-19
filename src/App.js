import { NavBar } from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <NavBar />
      </header>
      <main className="App_main">
        <ItemListContainer greeting="Bienvenido" />
      </main>
    </div>
  );
}

export default App;
