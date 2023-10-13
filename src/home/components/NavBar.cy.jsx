import React from 'react'
import { NavBar } from './NavBar'

describe('<NavBar />', () => {
  it('renders', () => {

    cy.mount(<NavBar />)
  })

  describe('Navbar functionality', () => {
    it('Los formularios de inicio de sesion y registro no deben ser visibles inicialmente', () => {


      // Verifica que los formularios de login y signup no estén visibles inicialmente
      cy.get('.div-login-visible').should('not.exist')
      cy.get('.div-signup-visible').should('not.exist')


    })
  })

})