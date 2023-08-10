import { configureStore } from "@reduxjs/toolkit";
import postreducers from "./postSlice.js"


const store  = configureStore({
    reducer:{
        postchooser:postreducers
    }
});


export default store;