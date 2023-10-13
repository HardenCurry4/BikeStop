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

  const lugar = (user.ocu === 'A')?
    'Entrada Principal AV Cra 51'
  :(user.ocu === 'B')?
    'Entrada Secundaria Diag 68D'
  :''

  const dataToEncode = `BikeStop   \nUsuario: ${nombre}  \nCodigo: ${codigo} \nFecha y Hora: ${ultima} \nLugar: ${lugar}`

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


