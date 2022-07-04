import React from 'react';
import NavBar from './Components/NavBar/navbar'
import ItemListContainer from './Components/ItemListContainer/itemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer name="Terrícola" app="'FG-Musica'" /> */}
    </>
  );
}

export default App;
