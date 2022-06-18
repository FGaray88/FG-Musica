import React from 'react';
import NavBar from './Components/NavBar/navbar'
import ItemListContainer from './Components/ItemListContainer/itemListContainer'
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
    </div>,
    <div>
      <ItemListContainer name="Terrícola" app="FG-Musica" />
    </div>
  );
}

export default App;
