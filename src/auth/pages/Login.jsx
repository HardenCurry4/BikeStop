import React from 'react'

import './login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  const signup = () => {
    document.getElementById("login").classList.remove("div-login-visible")
    
    document.getElementById("overlay").classList.remove("overlay")
  }

  return (
    <>
    <div className='div-container-login'>
      <div>
        <h4 className='txt-login'> Login </h4>
      </div>
      
      <div className='div-inputs-login'>

        <input type="email"  placeholder='Email' />
        <input type="password" placeholder='Contraseña' />

      </div>

      <div className='div-btns-login'>
        <div>

          <button onClick={signup} className='btn-cancelar '> <h4 className='text' > Cancelar </h4> </button>
          <Link to="/app">
          <button  className='btn-signup ' type="button" > <h4 className='text'> Login </h4> </button>
          </Link>

        </div>

      </div>

    </div>
    </>
  )
}
