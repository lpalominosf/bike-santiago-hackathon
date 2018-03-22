import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import Barra from './Barra';
import ContenedorTarjetas from './ContenedorTarjetas';
import  './VistaUno.css';



class VistaUno extends Component {
  render() {
    return(
      <div className="VistaUno">
        <Barra/>
        <ContenedorTarjetas/>
      </div>
     )
  }
}

export default VistaUno;
