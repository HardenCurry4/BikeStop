import React from 'react'
import './login.css'
import {useForm } from '../../hooks/useForm'
import { useAuthStore } from '../../hooks/useAuthStore'

export const Login = () => {
  const signup = () => {
    document.getElementById("login").classList.remove("div-login-visible")
    
    document.getElementById("overlay").classList.remove("overlay")
  }

  const {formState, onInputChange} = useForm({correo:'', pw:''})
  const { startLogin } = useAuthStore();


  const authlogin = ( ) => {
    startLogin ( formState.correo, formState.pw )

  }

  return (
    <>
    <div className='div-container-login'>
      <div>
        <h4 className='txt-login'> Login </h4>
      </div>
      
      <div className='div-inputs-login'>

        <input name='correo' value={formState.correo} onChange={onInputChange} type="email"  placeholder='Email' />
        <input name='pw' value={formState.pw} onChange={onInputChange} type="password" placeholder='Contraseña' />

      </div>

      <div className='div-btns-login'>
        <div>

          <button onClick={signup} className='btn-cancelar '> <h4 className='text' > Cancelar </h4> </button>
          
          <button  onClick={authlogin} className='btn-signup ' type="button" > <h4 className='text'> Login </h4> </button>
          

        </div>

      </div>

    </div>
    </>
  )
}
