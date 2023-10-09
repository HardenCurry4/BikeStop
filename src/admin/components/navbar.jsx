import React from 'react'
import { useAuthStore } from '../../hooks/useAuthStore'
import '../styles/navbar.css'

export const Navbar = () => {
    const { startLogout, user } = useAuthStore();

    return (
      <>
            <div id='navbar' className='navbar'>
            <div className='div-name-admin'>
            <h5>Bienvenido</h5>
            <h4>{ user.nombre } </h4>
          </div>
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
      </>
    )
}
