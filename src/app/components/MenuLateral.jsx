import React from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'
import '../styles/menulateral.css'
import 'animate.css';

export const MenuLateral = ({ cambiarOpcion }) => {
  const { user } = useAuthStore();

  return (
    <>
        <div id='menu' className='menu-lateral animate__animated animate__fadeInLeft'>
          <div className='div-name'>
            <h5>Bienvenido</h5>
            <h4>{ user.nombre } </h4>
          </div>

          <div className='div-menu'>
            <h4>Menu</h4>
            <ul>
              <li onClick={() => cambiarOpcion('inicio')} ><h6>INICIO</h6></li>
              <li onClick={() => cambiarOpcion('estacionar')} ><h6>ESTACIONAR</h6></li>
              <li onClick={() => cambiarOpcion('usuario')} ><h6>USUARIO</h6></li>
            </ul>
          </div>
      </div>
    </>
  )
}
