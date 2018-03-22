import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import  './VistaUno.css';

class VistaUno extends Component {
  render() {
    return(
      <div className="VistaUno container-fluid">
        <img src="../../../img/icons/chevron-left.png" className="flechita" alt="flechita"/>
        <h1>Viajes</h1>
      </div>
    )
  }
}

export default VistaUno;