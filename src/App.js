import React from 'react';
import Header from './componentes/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carrousel from './componentes/Carousel';
import ListaDePeliculas from './componentes/peliculasListaMain/ListaDePeliculas';
import ListaTrending from './componentes/peliculasListaMain/ListaTrending';
import ListaPopular from './componentes/peliculasListaMain/ListaPopular';
import ListaActoresMain from './componentes/ListaActoresMain';
import styled from '@emotion/styled';

const Main = styled.div`
  width:90%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1600px) {
    width: 60%;
  }

`



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>

        <Carrousel />
        <ListaTrending></ListaTrending>
        <ListaPopular />
        <ListaActoresMain></ListaActoresMain>

      </Main>
    </div>
  );
}

export default App;
