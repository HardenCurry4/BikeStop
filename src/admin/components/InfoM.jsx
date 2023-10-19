import React, { useEffect } from 'react'
import { useInfoStore } from '../../hooks/useInfoStore';
import { mes } from '../data/mes'
import { XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, Bar, BarChart} from 'recharts';
import '../styles/info.css'

export const InfoM = () => {
    const hoy = new Date();
    const añoActual = hoy.getFullYear();
    const { infoM, startInfoM } = useInfoStore();
    useEffect(() => {
        startInfoM()
    
      }, [])

      const datosGrafico = infoM.map(item => ({
        name: `${mes[item._id.month]}`, 
        Reservas: item.totalReservas, 
      }));
      
  return (
    <>
      <div className='d-flex pt-5 div-grafica-txt'>
        <div style={{ width: '80%', height: '400px' }} >

        <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={datosGrafico}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#fff" dataKey='name' />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Bar dataKey='Reservas' fill="#8884d8" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
        </div>
        <div>
          <h4 className='text-light' >Grafico del año {añoActual} </h4>
        </div>
      </div>
    </>
  )
}
