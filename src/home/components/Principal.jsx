import React from 'react'
import muestra from '../../assets/muestra.png';
import { Registro } from './Registro';
import './principal.css'
import { Login } from '../../auth/pages/Login';

export const Principal = () => {  
    const started = () => {
        document.getElementById("login").classList.toggle("div-login-visible")
        document.getElementById("signup").classList.remove("div-signup-visible")
        
        document.getElementById("overlay").classList.toggle("overlay")
      }

  return (
    <>
          <div className='div-container'>
              <div className='sub-div'>
                  <div className='div-bs'>
                      <h1 className='text-bs'> BikeStop </h1>
                      <p className='text-p' >Encuentra y disfruta de biciparqueaderos con BikeStop. 
                          Tu destino confiable para estacionar tu bicicleta de forma conveniente y protegida.
                      </p>
                      <button onClick={started} className='btn-getstarted' type='button'> <label className='text-btn-star'> Get Started </label> </button>
                  </div>

                  <div className='div-muestra'>
                      <div className='div-cir'>
                      <img className='img-muestra' src={muestra} alt="muestra" />
                      </div>
                      
                  </div>

                  <div id='signup' className='div-signup'>
                      <Registro />
                      
                  </div>

                  <div id='login' className='div-signup'>
                      <Login />
                      
                  </div>

              </div>
          </div>
        
    </>
  )
}
