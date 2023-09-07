import React from 'react';
import { NavBar } from '../components/NavBar';
import { Principal } from '../components/principal';
import { Footer } from '../components/Footer';



export const Home = () => {
    
  return (
    < >
      <div id='overlay' className=''>

        <NavBar /> 
      
        <Principal />
      
        <Footer />
      
      </div>
    </>
  )
}
