import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const NavBar = () => {
    const signup = () => {
        document.getElementById("signup").classList.toggle("div-signup-visible")
        
      }
    
  return (
    <>
        <nav className='navbar-principal'>        
            <a className="navbar-home " href="#"> BikeStop </a>
            <div className='div-btn'>
            <NavLink to="/login">
                <button  className='btn-login ' type="button" > <h4 className='text'> Login </h4> </button>
            </NavLink>
            <button onClick={signup} className='btn-signup '> <h4 className='text' > Sign Up </h4> </button>
            </div>
        </nav>
    </>
  )
}
