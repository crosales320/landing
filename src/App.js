import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <h1>Tucumanboothsolutions</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos" />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;