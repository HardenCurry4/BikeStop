import { createSlice } from '@reduxjs/toolkit'

export const authslice = createSlice({
    name: 'auth',
    initialState:{
        status: 'cheking',
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onLogin:(state,{payload})=>{
            state.status= 'sisauth' ;
            state.user= payload ;
            state.errorMessage= undefined;
        },
        
        onLogout: (state,{payload}) => {
            state.status= 'nelauth' ;
            state.user={};
            state.errorMessage=payload;
        },

        oncheking: (state) => {
            state.status= 'cheking';

        },

        onUpsito:( state, { payload } ) =>{
            state.user = payload
        }

        
    },
})

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, onUpsito } = authslice.actions