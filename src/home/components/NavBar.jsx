import React from 'react'
import './navbar.css'

export const NavBar = () => {
    const signup = () => {
        document.getElementById("signup").classList.add("div-signup-visible")
        document.getElementById("login").classList.remove("div-login-visible")

        document.getElementById("overlay").classList.add("overlay")
      }

    const login = () => {
        document.getElementById("login").classList.add("div-login-visible")
        document.getElementById("signup").classList.remove("div-signup-visible")

        document.getElementById("overlay").classList.add("overlay")
      }
    
    
  return (
    <>
        <nav className='navbar-principal'>        
            <a className="navbar-home " href="#"> BikeStop </a>
            <div className='div-btn'>

            <button onClick={login} className='btn-login ' type="button" >
            <h4 className='text'> Login </h4> 
            </button>
            
            <button onClick={signup} className='btn-signup '> 
            <h4 className='text' > Sign Up </h4> 
            </button>
            </div>
        </nav>
    </>
  )
}
