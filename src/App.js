import React from 'react';
import Header from './componentes/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carrousel from './componentes/Carousel';
import ListaTrending from './componentes/peliculasListaMain/ListaTrending';
import ListaPopular from './componentes/peliculasListaMain/ListaPopular';
import ListaActoresMain from './componentes/ListaActoresMain';
import styled from '@emotion/styled';
import Pelicula from './componentes/DetallesPelicula/DetallesPelicula';
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
const LayoutPelicula = styled.div`
  background-color: #333333;
  width:55%;
  margin-left: auto;
  margin-right: auto;
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
            <LayoutPelicula>
              <Pelicula />
            </LayoutPelicula>
          </div>
        </Route>
        <Footer>

        </Footer>
      </Router>
    </Wrapper>
  );
}

export default App;
