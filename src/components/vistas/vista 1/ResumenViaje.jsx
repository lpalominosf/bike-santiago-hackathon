import React, { Component } from 'react';

class ResumenViaje extends Component {
  render(){
    return(
      <div className="ResumenViaje">
        <i class="fas fa-arrows-alt-v fa-2x"></i>
        <p className="Trayecto">Metro Monte Tabor</p>
        <p className="Trayecto">Metro Plaza Maipú</p>
      </div>
    )
  }
}

export default ResumenViaje;