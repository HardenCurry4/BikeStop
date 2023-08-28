import React from 'react'
import muestra from '../../assets/muestra.png';
import { Registro } from './registro';
import './principal.css'

export const Principal = () => {
  return (
    <>
          <div className='div-container'>
              <div className='sub-div'>
                  <div className='div-bs'>
                      <h1 className='text-bs'> BikeStop </h1>
                      <p className='text-p' >Encuentra y disfruta de biciparqueaderos con BikeStop. <br />
                          Tu destino confiable para estacionar tu bicicleta de forma conveniente y protegida.
                      </p>
                      <button className='btn-getstarted' type='button'> <label className='text-btn-star'> Get Started </label> </button>
                  </div>

                  <div className='div-muestra'>
                      <div className='div-cir'></div>
                      <img className='img-muestra' src={muestra} alt="muestra" />
                  </div>

                  <div id='signup' className='div-signup'>
                      <Registro/>

                  </div>

              </div>
          </div>
        
    </>
  )
}
