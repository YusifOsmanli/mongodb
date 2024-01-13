import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./slice/DataSlice";
import BasketSlice from "./slice/BasketSlice";


const store= configureStore({
    reducer:{
       data: DataSlice,
       basket:BasketSlice,
      


    }
})
export default store