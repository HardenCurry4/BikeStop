import React from 'react'
import { Inicio } from './inicio'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('<Inicio />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1280, 720);
    cy.mount(
    <Provider store={store}>

    <Inicio />
    
    </Provider>
    )
  })
})