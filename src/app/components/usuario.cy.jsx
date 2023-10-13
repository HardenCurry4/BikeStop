import React from 'react'
import { Usuario } from './usuario'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('<Usuario />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1280, 720);
    cy.mount(
    <Provider store={store}>

    <Usuario />
    
    </Provider>
    )
  })
})

describe('Prueba del componente Usuario', () => {
  it('Debería desplegar el formualrio de cambio de nombre', () => { // Reemplaza '/ruta/a/tu/componente' con la ruta real de tu componente

    cy.viewport(1280, 720);
    cy.mount(
      <Provider store={store}>
  
      <Usuario />
      
      </Provider>
      )
    // Hacer clic en el botón de editar nombre
    cy.contains('Editar').click();
    cy.contains('Cancel').click();


    // Verificar que el nombre se ha actualizado correctamente
  });
});


describe('Prueba del componente Usuario', () => {
  it('Debería desplegar el formulario para eliminar la cuenta del usuario', () => {

    cy.viewport(1280, 720);
    cy.mount(
      <Provider store={store}>
  
      <Usuario />
      
      </Provider>
      )

    // Hacer clic en el botón de eliminar cuenta
    cy.get('.eliminaruser').click()

  });
});