import React, { useEffect } from 'react'
import { useInfoStore } from '../../hooks/useInfoStore';
import { hora } from '../data/hora'
import { XAxis, YAxis, Tooltip, Legend, AreaChart, Area, ResponsiveContainer} from 'recharts';


export const InfoH = () => {
  const { infoH, startInfoH } = useInfoStore();
  const hoy = new Date(); 
  const ayer = new Date(hoy);
    
    useEffect(() => {
        startInfoH()
    
      }, [])

      
  ayer.setDate(hoy.getDate() - 1);

  const opcionesFormato = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = ayer.toLocaleDateString('es-ES', opcionesFormato);

 
      
      const datosGrafico = infoH.map(item => ({
        name: `${ fechaFormateada }-${hora[item._id.hour]}`,
        Reservas: item.totalReservas, 
      }));


  return (
    <>
      <div className='d-flex pt-5'>
        < div style={{ width: '100%', height: '400px' }}>

          <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={400} height={400} data={datosGrafico} >
            <XAxis stroke="#fff" dataKey="name"  />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="Reservas" fill="#8884d8" />
          </AreaChart>
          </ResponsiveContainer>

        </div>
        <div>
          <h4 className='text-light'>Infome del uso del parqueadero por horas del dia {fechaFormateada}</h4>

        </div>
      </div>
    </>
  )
}
