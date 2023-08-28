import React from 'react'
import './registro.css'

export const Registro = () => {
  const signup = () => {
    document.getElementById("signup").classList.remove("div-signup-visible")
    
  }
  

  return (
    <>
    <div className='div-container-registro'>

        <div className='div-col1'>
            <h4 className='txt-registro'> Registro </h4>
            <div className='div-intento'>

              <input className='input-id' type="text" placeholder='Identificacion'/>
              <input className='input-codigo' type="text" placeholder='Codigo'/>
              <input className='input-nombre' type="text" placeholder='Nombre'/>
              <input className='input-contraseña' type="password" placeholder='Contraseña'/>

            </div>

            <input className='input-rol' type="text" placeholder='Rol'/>

        </div>

        <div className='div-col2'>

          <div className='div-intento2'>
          
            <input className='input-tipo-id' type="text" placeholder='Tipo de Identificacion'/>
            <input className='input-email' type="email" placeholder='Correo'/>
            <input className='input-apellido' type="text" placeholder='Apellido'/>
            <input className='input-confirmar-contra' type="text" placeholder='Confirmar Contraseña'/>
          </div>
        </div>

        <div className='div-btns'>
          <button  className='btn-login ' type="button" > <h4 className='text'> Sign Up </h4> </button>

          <button onClick={signup} className='btn-signup '> <h4 className='text' > Cancelar </h4> </button>


        </div>




    </div>
    


    </>
  )
}
