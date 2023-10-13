import React from 'react'
import { Principal } from './Principal'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('<Principal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1280, 720);
    cy.mount(
      <Provider store={ store }>
        <Principal />
      </Provider>
    )
  })
})