import React, { useState } from 'react'
import '../styles/navbar.css'
import { FcMenu } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { Principal } from './principal';
import { MenuLateral } from './MenuLateral';

export const NavBar = () => {
  const menu = () => {
    document.getElementById("menu").classList.toggle("menu-lateral-show")
  }

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  
  const cambiarOpcion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

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
                  <Link to='/home'>
                    <button className="dropdown-item" >Salir</button>
                  </Link>

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
