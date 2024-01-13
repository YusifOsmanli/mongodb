import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk("getData", async () => {
    const response = await axios.get("http://localhost:8080/products")
    return response.data
})

 const DataSlice=createSlice({
    name:"data",
    initialState:{
        data:[],
        error:"",
        loading:false
    },
    reducer:{

    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state, action) => {
            // state.loading = true,
                // state.error = ""
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            // state.loading = false,
                // state.error = "",
                state.data = action.payload
            state.original = action.payload
            console.log(action.payload)
        })
        builder.addCase(getData.rejected, (state, action) => {
            // state.error = action.payload.message,
                state.loading = false
        })}
 })

export default DataSlice.reducer