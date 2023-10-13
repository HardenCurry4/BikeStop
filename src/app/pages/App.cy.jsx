import React from 'react'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    
    cy.viewport(1280, 720);
    cy.mount(
    
    <Provider store={ store } >

    <App />
    
    </Provider>
    )
  })
})