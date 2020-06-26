import React from 'react';
import Header from './componentes/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import './App.css';
import Carrousel from './componentes/Carousel';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carrousel></Carrousel>
    </div>
  );
}

export default App;
