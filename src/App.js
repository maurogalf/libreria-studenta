import './App.css';
import NavBar from './components/NavBar/NavBar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="Bienvenidos a La Librería."/>
      </main>
    </div>
  );
}

export default App;
