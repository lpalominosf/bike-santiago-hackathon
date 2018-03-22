import React, { Component } from 'react';

import Mes from './Mes';
import ResumenViaje from './ResumenViaje';
import TiempoViaje from './TiempoViaje';
import CobrosAdicionales from './TarifaAdicional';


class ResumenMes extends Component {
  render() {
    return(
      <div>
        <Mes/>
        <ResumenViaje/>
        <TiempoViaje/>
        <CobrosAdicionales/>
      </div>
    )
  }
}

export default ResumenMes;