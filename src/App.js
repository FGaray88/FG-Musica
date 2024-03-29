import React from 'react';
import NavBar from './Components/NavBar/navbar'
import ItemListContainer from './Components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/cart";
import ConfirmScreen from "./Components/Cart/confirmScreen";
import CustomProvider from './Context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer name="Terrícola" app="'FG-Musica'" />} />
          <Route path="/categoria/:categoryName" element={<ItemListContainer name="Terrícola" app="'FG-Musica'" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirm" element={<ConfirmScreen />} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
