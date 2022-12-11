import { configureStore } from "@reduxjs/toolkit";
import Getslice from "./Getslice";
import Postreducer from "./Postslice";
import Putsreducer from "./Putslice";
import Deletereducer from "./Deleteslice";
const store = configureStore({
    reducer: {
        getproduct: Getslice,
        postproduct: Postreducer,
        putproduct:Putsreducer,
        deleteproduct :Deletereducer
    }
})

export default store;