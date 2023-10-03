import React from 'react'
import './registro.css'
import {useForm } from '../../hooks/useForm'
import { useAuthStore } from '../../hooks/useAuthStore'

export const Registro = () => {
  const signup = () => {
    document.getElementById("signup").classList.remove("div-signup-visible")
    
    document.getElementById("overlay").classList.remove("overlay")
  }

  const {formState, onInputChange} = useForm({nombre:'', codigo:'', correo:'', pw:'', comPw:''})
  const { startRegister } = useAuthStore();


  const authregister = ( ) => {
    if(formState.pw !== formState.comPw) return console.log('pilas socioooooo')
    startRegister (formState.nombre, formState.codigo, formState.correo, formState.pw)

  }
  

  return (
    <>
    <div className='div-container-registro'>
      <div>
        <h4 className='txt-registro'> Registro </h4>
      </div>
      
      <div className='div-inputs'>

        <input name='correo' value={formState.correo} onChange={onInputChange} type="email" placeholder='Email' />
        <input name='codigo' value={formState.codigo} onChange={onInputChange} type="text" placeholder='Codigo' />
        <input name='nombre' value={formState.nombre} onChange={onInputChange} type="text" placeholder='Nombre' />
        <input name='pw' value={formState.pw} onChange={onInputChange} type="password" placeholder='Contraseña' />
        <input name='comPw' value={formState.comPw} onChange={onInputChange} type="password" placeholder='Confirmar Contraseña' />
        
      </div>

      <div className='div-btns'>
        <div>

          <button onClick={signup} className='btn-cancelar '> <h4 className='text' > Cancelar </h4> </button>
          <button onClick={authregister} className='btn-signup ' type="button" > <h4 className='text'> Sign Up </h4> </button>

        </div>

      </div>

    </div>
    
    </>
  )
}
