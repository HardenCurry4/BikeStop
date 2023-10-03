import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react';
import { Maps } from './maps'
import { GrBike } from "react-icons/gr";
import { GiHand } from "react-icons/gi";
import { useAuthStore } from '../../hooks/useAuthStore'
import { useCuposStore } from '../../hooks/useCuposStore'
import '../styles/estacionar.css'

export const Estacionar = () => {
  const { user } = useAuthStore();
  const { reservar, entregar } = useCuposStore();



  const dataToEncode = "     BikeStop   \nnombre.usuario \nfecha.solicitud hora.solicitud";
  
  const [tieneParqueadero, setTieneParqueadero] = useState(false);

  // const asignarParqueadero = () => {
  //   if (user.ocu === null) {
  //     setTieneParqueadero(true)
  //     reservar()
  // }
    
  // };

  // const liberarParqueadero = () => {
  //   if (user.ocu !== null) {
  //     setTieneParqueadero(false)
  //     entregar()
  //   }
  // };



  return (
    <>
    <div className='div-inicio'>
        <div className='div-espacios-estacionar'>
          <div >
            {user.ocu !== null ? (
              <div>
                <button className='btn-salida' onClick={entregar}>Ya Voy de Salida
                  <GiHand/>
                </button>
              </div>
            ) : (
              <div>
                <button className='btn-llegada' onClick={reservar}>Solicitar Estacionamiento
                  <GrBike/>
                </button>
              </div>
            )}
          </div>

          <div>

          <QRCode  size={254} value={dataToEncode} />

          </div>

        </div>

        <div className='div-maps'>

          <Maps />

        </div>
      </div>
    



    </>
  )
}
