import React from 'react';
import NavBar from './Components/NavBar/navbar'
import ItemListContainer from './Components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./Components/Cart/cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<ItemListContainer name="Terrícola" app="'FG-Musica'" />} />
        <Route path="/categoria/:categoryName" element={<ItemListContainer name="Terrícola" app="'FG-Musica'" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> */}
      <ItemListContainer name="Terrícola" app="'FG-Musica'" />
      <ItemDetailContainer />

    </BrowserRouter>
  );
}

export default App;
