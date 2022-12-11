import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios  from 'axios'


export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://localhost:5000/api/products');
    const data = await res.json();
    console.log(data);
    return data;
  });


  const STATUSES = {
    IDLE:'idle',
    ERROR: 'error',
    LOADING: 'loading',
}

const getSlice = createSlice({
    name: 'get product',
    initialState:{
        data:[],
        status: STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

//export const { setProducts, setStatus } = productSlice.actions;
export default getSlice.reducer;




 

