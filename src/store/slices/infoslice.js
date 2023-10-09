import { createSlice } from '@reduxjs/toolkit'

export const infoslice = createSlice({
    name: 'info',
    initialState:{
        infoM: [],
        infoH: [],
        errorMessage: undefined
    },
    reducers: {
        onInfoM:(state,{payload})=>{
            state.infoM= payload ;
            state.errorMessage= undefined;
        },

        onInfoH:(state,{payload})=>{
            state.infoH= payload ;
            state.errorMessage= undefined;
        },
    },
})

// Action creators are generated for each case reducer function
export const { onInfoM, onInfoH } = infoslice.actions