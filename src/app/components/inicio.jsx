import React, { useEffect } from 'react'
import IconTotal from "../../assets/icon-total.png";
import IconOcupado from "../../assets/icon-ocupado.png";
import IconDispo from "../../assets/icon-dispo.png";
import { Maps } from './maps';
import { useCuposStore } from '../../hooks/useCuposStore';
import '../styles/inicio.css'



export const Inicio = () => {
  const { traerDatos, total, ocupado, disponible } = useCuposStore();
  useEffect(() => {
    traerDatos()
  }, [])
  

  return (
    <>
      <div className='div-inicio'>
        <div className='div-espacios'>
          <div className='div-total'>

            <h4> Total de Cupos </h4>
            <img src={IconTotal} alt="icono total de cupos"/>
            <h1>{total}</h1>

          </div>

          <div className='div-ocupados'>

            <h4> Ocupados </h4>
            <img src={IconOcupado} alt="icono de espacios ocupados" />
            <h1>{ocupado}</h1>

          </div>

          <div className='div-dispo'>
            <h4> Disponibes </h4>
            <img src={IconDispo} alt="icono de espacios disponibles" />
            <h1>{disponible}</h1>

          </div>

        </div>

        <div className='div-maps'>

          <Maps />

        </div>
      </div>
    </>
  )
}
