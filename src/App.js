import React from 'react';
import NavBar from './Components/NavBar/navbar'
import ItemListContainer from './Components/ItemListContainer/itemListContainer'
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      
      <ItemListContainer name="Terrícola" app="'FG-Musica'" />
    </>
  );
}

export default App;
