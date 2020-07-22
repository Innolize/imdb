import React from 'react';
import Header from './componentes/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carrousel from './componentes/Carousel';
import ListaTrending from './componentes/peliculasListaMain/ListaTrending';
import ListaPopular from './componentes/peliculasListaMain/ListaPopular';
import ListaActoresMain from './componentes/ListaActoresMain';
import styled from '@emotion/styled';
import Pelicula from './componentes/DetallesPelicula/DetallesPelicula';
import ResultadosBusqueda from './componentes/BuscarPelicula/ResultadosBusqueda';
import ResultadoBusquedaVacio from './componentes/BuscarPelicula/ResultadoBusquedaVacio';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';


const Wrapper = styled.div`
  font-family: 'Lato', sans-serif;
  
`
const LayoutMain = styled.div`
  width:90%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1600px) {
    width: 60%;
  }
`





function App() {
  return (
    <Wrapper>
      <Router>
        <Header></Header>
        <Route path="/" exact>
          <div style={{ backgroundColor: "black" }}>
            <LayoutMain>
              <Carrousel />
              <ListaTrending />
              <ListaPopular />
              <ListaActoresMain />
            </LayoutMain>
          </div>
        </Route>
        <Route path="/movie/:idPelicula">
          <div style={{ backgroundColor: "#D9D8D3" }}>
            <Pelicula />
          </div>
        </Route>
        <Route path="/search/:valorBusqueda">
          <ResultadosBusqueda />
        </Route>
        <Route path={'/search/'} exact>
          <ResultadoBusquedaVacio />
        </Route>
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;
