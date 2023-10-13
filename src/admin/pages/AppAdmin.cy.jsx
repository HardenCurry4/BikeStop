import React from 'react'
import { AppAdmin } from './AppAdmin'
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('<AppAdmin />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1280, 720);
    cy.mount(
    <Provider store={store}>

    <AppAdmin />
    
    </Provider>
    )
  })
})