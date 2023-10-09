import React, { useEffect } from 'react'
import { useInfoStore } from '../../hooks/useInfoStore';
import { mes } from '../data/mes'
import { XAxis, YAxis, Tooltip, Legend, BarChart, Bar, CartesianGrid} from 'recharts';

export const InfoM = () => {
    const hoy = new Date();
    const añoActual = hoy.getFullYear();
    const { infoM, startInfoM } = useInfoStore();
    useEffect(() => {
        startInfoM()
    
      }, [])

      const datosGrafico = infoM.map(item => ({
        name: `${mes[item._id.month]}-${item._id.year}`, 
        Reservas: item.totalReservas, 
      }));
      
  return (
    <>
      <div className='d-flex pt-5'>
        <div className='text-light'>
          <BarChart width={1200} height={400} data={datosGrafico} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid stroke="#fff" strokeDasharray="3 3" />
            <XAxis stroke="#fff" dataKey="name" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Reservas" name='Total de Reservas ' fill="#2A3F54" />
          </BarChart>
        </div>

        <div>
          <h4 className='text-light' >Grafico del año {añoActual} </h4>
        </div>
      </div>
    </>
  )
}
