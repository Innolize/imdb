import React from 'react';
import Header from './componentes/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carrousel from './componentes/Carousel';
import TrendingMovies from './componentes/TrendingMovies';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div id="main" style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
        <Carrousel />
        <TrendingMovies />
      </div>
    </div>
  );
}

export default App;
