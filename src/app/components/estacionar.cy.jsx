import React from 'react'
import { Estacionar } from './estacionar'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('<Estacionar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1280, 720);
    cy.mount(
    <Provider store={store}>
    <Estacionar />
    </Provider>
    
    )
  })
})