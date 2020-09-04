import React from 'react';
import Header from './componentes/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import styled from '@emotion/styled';
import Mainpage from './componentes/Mainpage'
import Pelicula from './componentes/DetallesPelicula/DetallesPelicula';
import ResultadosBusqueda from './componentes/BuscarPelicula/ResultadosBusqueda';
import ResultadoBusquedaVacio from './componentes/BuscarPelicula/ResultadoBusquedaVacio';
import Footer from './componentes/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Wrapper = styled.div`
  font-family: 'Lato', sans-serif;
  
`

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Route path="/" exact>
          <Mainpage />
        </Route>
        <Route path="/movie/:idPelicula">
          <Pelicula />
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
