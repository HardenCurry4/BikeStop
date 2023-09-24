import React from 'react'
import '../styles/principal.css'
import { Historial } from './historial'
import { Inicio } from './inicio'
import { Estacionar } from './estacionar'
import { Usuario } from './usuario'

export const Principal = ({ opcionSeleccionada }) => {

  let component = ( opcionSeleccionada == 'inicio') ? <Inicio/> :
                  ( opcionSeleccionada == 'estacionar') ? <Estacionar/>:
                  ( opcionSeleccionada == 'historial') ? <Historial/>:
                  ( opcionSeleccionada == 'usuario') ? <Usuario/> : <Inicio/>;

  return (
    <>
    <div className='container-app'>
      {component}

    </div>
    
    </>
  )
}
