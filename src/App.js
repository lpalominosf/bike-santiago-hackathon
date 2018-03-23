import React, { Component } from 'react';
import Demo from './components/geolocation';
import { Navbar } from 'react-bootstrap';
import VistaUno from './components/vistas/vista 1/VistaUno';
import ContenedorTarjetas from './components/vistas/vista 1/ContenedorTarjetas';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VistaUno/>
      </div>
    );
  }
}

export default App;
