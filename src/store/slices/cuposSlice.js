import { createSlice } from '@reduxjs/toolkit'

export const cuposSlice = createSlice({
    name: 'cupos',
    initialState:{
        total: 0,
        ocupado: 0,
        disponible: 0
    },
    reducers: {
        onUpDateCupitos:(state,{payload})=>{
            state.total = payload.total,
            state.ocupado = payload.ocupado,
            state.disponible = payload.disponible
            
        },
                         
    },
})

// Action creators are generated for each case reducer function
export const { onUpDateCupitos } = cuposSlice.actions
