import React from 'react'
import './registro.css'

export const Registro = () => {
  const signup = () => {
    document.getElementById("signup").classList.remove("div-signup-visible")
    
    document.getElementById("overlay").classList.remove("overlay")
  }
  

  return (
    <>
    <div className='div-container-registro'>
      <div>
        <h4 className='txt-registro'> Registro </h4>
      </div>
      
      <div className='div-inputs'>

        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Codigo' />
        <input type="text" placeholder='Nombre' />
        <input type="password" placeholder='Contraseña' />
        <input type="password" placeholder='Confirmar Contraseña' />

      </div>

      <div className='div-btns'>
        <div>

          <button onClick={signup} className='btn-cancelar '> <h4 className='text' > Cancelar </h4> </button>
          <button  className='btn-signup ' type="button" > <h4 className='text'> Sign Up </h4> </button>

        </div>

      </div>

    </div>
    
    </>
  )
}
