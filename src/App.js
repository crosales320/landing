import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">{ }
        <h1>Tucumanboothsolutions</h1>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos"/>
      </header>
    </div>
  );
}


export default App;