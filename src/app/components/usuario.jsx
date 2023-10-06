import React from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'
import { deleteUser } from './deleteUser'
import { UpdName } from './UpdName'
import { UpdPw } from './UpdPw'

import '../styles/usuario.css'


export const Usuario = () => {
  const { user } = useAuthStore();
  const { ChangeName } = UpdName();
  const { ChangePw } = UpdPw();
  const { handleDeleteUser } = deleteUser();
  const { nombre, correo } = user;
  const maskedEmail = correo;

  return (
    <>
    <div className='container-div'>
      <div className='container-user'>
          <div className='container-info'>
            <div>
              <div className='div-texto'>

                <h5> NOMBRE DE USUARIO </h5>
                <h4> {nombre} </h4>

              </div>

              <button onClick={ChangeName}> Editar </button>
              
            </div>
            <div>
              <div className='div-texto' >

                <h5> CONTRASEÑA </h5>
                <h4> ********** </h4>
              </div>

              <button onClick={ChangePw} > Editar </button>

            </div>
            <div>
              <div className='div-texto' >

                <h5> CORREO ELECTRONICO </h5>
                <h4> {maskedEmail} </h4>

              </div>
            </div>
            <div className="eliminaruser ">
              <button onClick= { handleDeleteUser } >Eliminar Cuenta</button>

            </div>
          </div>

      </div>
    </div>
      
    
    </>
  )
}
