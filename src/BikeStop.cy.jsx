import React from 'react'
import { BikeStop } from './BikeStop'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

describe('<BikeStop />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1280, 720);
    cy.mount(
      <Provider store={ store }>
      <BrowserRouter>
        <BikeStop />
      </BrowserRouter>
    </Provider>
    
    )
  })
})