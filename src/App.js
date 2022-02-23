import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      </header>
      <main>
        {/* <ItemListContainer greeting="Bienvenidos a La Librería."/> */}
        <ItemDetailContainer/>
      </main>
    </div>
  );
}

export default App;
