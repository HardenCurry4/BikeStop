import React from 'react'
import { Inicio } from './inicio'
import { Estacionar } from './estacionar'
import { Usuario } from './usuario'
import '../styles/principal.css'


export const Principal = ({ opcionSeleccionada }) => {

  let component = ( opcionSeleccionada == 'inicio') ? <Inicio/> :
                  ( opcionSeleccionada == 'estacionar') ? <Estacionar/>:
                  ( opcionSeleccionada == 'usuario') ? <Usuario/> : <Inicio/>;

  

  return (
    <>
    <div className='container-app'>
      {component}

    </div>
    
    </>
  )
}
