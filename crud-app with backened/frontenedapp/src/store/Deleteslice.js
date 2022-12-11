import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import  axios  from 'axios';

export const deleteProducts = createAsyncThunk('products/delete', async ({title, description, price}) => {
    const res = await axios.post('https://localhost:5000/api/products', {
    title : title,
    description : description,    
    price: price,
    });
    const data = await res.data;
    return data;
  });



const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

const deleteSlice = createSlice({
    name: 'delete product',
    initialState:{
        data:[],
        status: STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder     
            .addCase(deleteProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(deleteProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(deleteProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

//export const { setProducts, setStatus } = productSlice.actions;
export default deleteSlice.reducer;