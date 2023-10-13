import React from 'react'
import { Home } from './Home'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1280, 720);
    cy.mount(
      <Provider store={store} >
        <Home />
      </Provider>

    )
  })
})

describe('Home functionality Login ', () => {
  it('El formulario de inicio de sesion se muestra al hacer click en el btn de registro', () => {


    cy.viewport(1280, 720);
    cy.mount(
      <Provider store={store} >
        <Home />
      </Provider>

    )

    // Haz clic en el botón de login y verifica que el formulario de login se muestra
    cy.get('.btn-login').click()
    cy.get('.div-login-visible').should('exist')
    cy.get('.div-signup-visible').should('not.exist')

  })
})


describe('Home functionality signup', () => {
  it('El formulario de registro se muestra al hacer click en el btn de registro', () => {

    cy.viewport(1280, 720);
    cy.mount(
      <Provider store={store} >
        <Home />
      </Provider>

    )

    // Haz clic en el botón de signup y verifica que el formulario de signup se muestra
    cy.get('.btn-signupt', { timeout: 10000 }).click()
    cy.get('.div-login-visible').should('not.exist')
    cy.get('.div-signup-visible').should('exist')

  })
})


  

