import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import {CartProvider} from './Context/CartContext/CartContext';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <div className="App">
        <header className="header">
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route path="/libreria-studenta" element={<ItemListContainer greeting="Bienvenidos a La Librería."/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Encontrá lo que buscas."/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </main>
      </div>
    </CartProvider>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
