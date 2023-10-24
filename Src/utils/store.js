import {configureStore} from '@reduxjs/toolkit';
import cartslice from './cartslice';

const storre = configureStore({
    reducer:{
        cart:cartslice,
    },

})

export default storre;