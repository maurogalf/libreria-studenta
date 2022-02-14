import './App.css';
import NavBar from './components/NavBar/NavBar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="Bienvenidos a La Librería."/>
        <ItemCount stock = {10} />
      </main>
    </div>
  );
}

export default App;
