import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import  axios  from 'axios';

export const createProducts = createAsyncThunk('products/create', async ({title, description, price}) => {
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

const postSlice = createSlice({
    name: 'post product',
    initialState:{
        data:[],
        status: STATUSES.IDLE,
    },

    extraReducers: (builder) => {
        builder     
            .addCase(createProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(createProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(createProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

//export const { setProducts, setStatus } = productSlice.actions;
export default postSlice.reducer;