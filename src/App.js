import React from 'react';
import Header from './componentes/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carrousel from './componentes/Carousel';
import ListaDePeliculas from './componentes/peliculasListaMain/ListaDePeliculas';
import ListaTrending from './componentes/peliculasListaMain/ListaTrending';
import ListaPopular from './componentes/peliculasListaMain/ListaPopular';
import ListaActoresMain from './componentes/ListaActoresMain';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div id="main" style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>

        <Carrousel />
        <ListaTrending></ListaTrending>
        <ListaPopular />
        <ListaActoresMain></ListaActoresMain>

      </div>
    </div>
  );
}

export default App;
