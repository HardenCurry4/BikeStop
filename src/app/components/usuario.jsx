import React from 'react'
import '../styles/usuario.css'

export const Usuario = () => {
  return (
    <>
    <div className='container-div'>
      <div className='container-user'>
          <div className='container-info'>
            <div>
              <div className='div-texto'>

                <h5> NOMBRE DE USUARIO </h5>
                <h4> user.name </h4>

              </div>

              <button> Editar </button>
              
            </div>
            <div>
              <div className='div-texto' >

                <h5> CONTRASEÑA </h5>
                <h4> contraseña.usuario </h4>
              </div>

              <button> Editar </button>

            </div>
            <div>
              <div className='div-texto' >

                <h5> CORREO ELECTRONICO </h5>
                <h4> correo.usuario </h4>

              </div>
            </div>
          </div>

      </div>
    </div>
      
    
    </>
  )
}
