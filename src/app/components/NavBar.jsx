import React, { useState } from 'react'
import { FcMenu } from "react-icons/fc";
import { Principal } from './principal';
import { MenuLateral } from './MenuLateral';
import { useAuthStore } from '../../hooks/useAuthStore'
import '../styles/navbar.css'

export const NavBar = () => {
  const menu = () => {
    document.getElementById("menu").classList.toggle("menu-lateral-show")
  }

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  
  const cambiarOpcion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const { startLogout } = useAuthStore();

  return (
    <>
      <div className='mega-div'>

        <MenuLateral cambiarOpcion={cambiarOpcion} />

        <div className='content' >

          <div id='navbar' className='navbar'>
            <button onClick={menu} className='btnmenu'>
              <FcMenu />
            </button>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                BIKESTOP
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <button className="dropdown-item" onClick={startLogout} >Salir</button>

                </li>
              </ul>
            </div>
          </div>

          <Principal opcionSeleccionada={opcionSeleccionada} />
        </div>
      </div>
    </>
  )
}
