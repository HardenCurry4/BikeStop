import React from 'react'
import { Registro } from './Registro'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('<Registro />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store} >

        <Registro />

      </Provider>
    )
  })
})