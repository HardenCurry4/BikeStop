import {configureStore} from '@reduxjs/toolkit'
import { authslice  } from './slices/authslice';
import { cuposSlice  } from './slices/cuposSlice';
import { infoslice } from './slices/infoslice';


export const store=configureStore({
    reducer:{
        auth: authslice.reducer,
        cupos: cuposSlice.reducer,
        info: infoslice.reducer
        
        
    }
});