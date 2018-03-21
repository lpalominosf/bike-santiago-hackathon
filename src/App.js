import React, { Component } from 'react';
import Demo from './components/geolocation';
import VistaUno from './components/vistas/vista 1/VistaUno';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Demo/>
        <VistaUno/>
      </div>
    );
  }
}

export default App;
