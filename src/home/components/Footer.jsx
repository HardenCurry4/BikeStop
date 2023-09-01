import React from 'react'
import logoUD from "../../assets/logoUD.png";
import './footer.css'

export const Footer = () => {
  return (
    <>
          <div className='div-footer'>
              <div className='div-logo-texto'>

                  <div className='div-logo'>
                      <img className='img-logo' src={logoUD} alt="logo UD" />

                  </div>

                  <div className='div-universidad'>

                      <label className='universidad'>Universidad Distrital Francisco José de Caldas <br />
                          NIT. 899.999.230.7</label><br />
                      <label >Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional</label>
                      <br />
                      <a target="_blank" href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=3499">Acuerdo de creación N° 10 de 1948 del Concejo de Bogotá</a>
                      <br />
                      <a target="_blank" href="https://autoevaluacionyacreditacion.udistrital.edu.co/sites/acreditacion/files/documentos/Resolucion%20MEN%20023653%20del%2010%20de%20diciebmre%20de%202021.pdf">Acreditación Institucional de Alta Calidad - Resolución N° 023653 del 10 de diciembre del 2021</a>

                  </div>

                  <div className='div-contacto'>

                      <label className='txt-contacto'> Contáctenos </label>

                      <div className='div-repre'>
                          <label ><strong>REPRESENTANTE LEGAL:</strong></label><br />
                          <label > Rector Dr. Giovanny Mauricio Tarazona Bermúdez </label>
                          <a href="mailto:rectoria@udistrital.edu.co ">rectoria@udistrital.edu.co </a>
                      </div>

                      <a target="_blank" href="https://www.google.com.co/maps/place/Cra.+7+%2340b-53,+Bogot%C3%A1/@4.6280856,-74.0674698,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9a287591013f:0x5cce5fbab6b77b9b!8m2!3d4.6280856!4d-74.0652811?hl=es">
                          Calle 13 # 31 -75
                          <br />Bogotá D.C. - República de Colombia
                      </a>

                      <label ><strong>Código Postal:</strong>  111611 - 111611537 </label>

                      <a href="https://centroderelevo.gov.co/632/w3-channel.html" title="Atención a usuarios del Centro De Relevo">
                          <strong> Atención a usuarios del Centro De Relevo:</strong>
                          <br />(+57) 6013238314
                      </a>

                      <label >
                          <a href="http://reclamos.udistrital.edu.co:8080/" title="Número de contacto Oficina de Quejas, Reclamos y Atención al Ciudadano">
                              (+57) 6013239300 </a> ext: 1421 - (+57) 6013238340
                      </label>

                      <label >
                          Lunes a viernes de 8:00 a.m. a 5:00 p.m.
                      </label>

                      <a href="mailto:atencion@udistrital.edu.co" title="Correo electrónico de atención al ciudadano">
                          <strong>Atención al ciudadano: </strong>
                          <br />atencion@udistrital.edu.co
                      </a>

                      <a href="mailto:notificacionjudicial@udistrital.edu.co" title="correo electrónico para notificaciones judiciales">
                          <strong>Notificaciones judiciales: </strong>
                          <br />notificacionjudicial@udistrital.edu.co
                      </a>

                      <a href="http://www.udistrital.edu.co/directorio" title="Directorio institucional"> Directorio institucional</a>

                  </div>
              </div>
          </div>
    
    </>
  )
}
