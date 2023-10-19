import React from 'react'
import QRCode from 'qrcode.react';
import { Maps } from './maps'
import { GrBike } from "react-icons/gr";
import { GiHand } from "react-icons/gi";
import { useAuthStore } from '../../hooks/useAuthStore'
import { useCuposStore } from '../../hooks/useCuposStore'
import '../styles/estacionar.css'

export const Estacionar = () => {
  const { reservar, entregar } = useCuposStore();
  const { user } = useAuthStore();
  const { nombre, ultima, codigo } = user;

  const formatearFecha = (ultima) => {

    const fechaOriginal = new Date(ultima);
    const fechaModificada = new Date(fechaOriginal);
    fechaModificada.setHours(fechaModificada.getHours() + 5);
    const opciones = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const fechaFormateada = fechaModificada.toLocaleString('es-CO', opciones);
    return fechaFormateada;

  };

  const lugar = (user.ocu === 'A')?
    'Diag 68D'
  :(user.ocu === 'B')?
    'AV Cra 51'
  :'';


  const dataToEncode = `BikeStop \nUsuario: ${nombre} \nCodigo: ${codigo} \nFecha y Hora: ${formatearFecha(ultima)} \nLugar: ${lugar}`

  return (
    <>
      <div className='div-inicio'>
        <div className='div-espacios-estacionar'>
          <div >
            {user.ocu !== null ? (
              <div >
                <button className='btn-salida' onClick={entregar}>Ya Voy de Salida
                  <GiHand />
                </button>
              </div>
            ) : (
              <div>
                <button className='btn-llegada' onClick={reservar}>Solicitar Estacionamiento
                  <GrBike />
                </button>
              </div>
            )}
          </div>

          <div id='qr'>

            {(user.ocu !== null) ? (
              <QRCode size={254} value={dataToEncode} />
            ) :
              ''
            }

          </div>

        </div>

        <div className='div-maps'>

          <Maps />

        </div>
      </div>
    </>
  )
}


