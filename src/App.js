import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a La Librería."/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos a La Librería."/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
