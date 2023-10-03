import {configureStore} from '@reduxjs/toolkit'
import { authslice  } from './slices/authslice';
import { cuposSlice  } from './slices/cuposSlice';


export const store=configureStore({
    reducer:{
        auth: authslice.reducer,
        cupos: cuposSlice.reducer
        
        
    }
});