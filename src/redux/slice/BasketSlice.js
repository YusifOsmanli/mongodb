import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const BasketSlice = createSlice({
    name: "basket",
    initialState: {
        items: localStorage.getItem("basketItems")?JSON.parse(localStorage.getItem("basketItems")):[]
       
    },
    reducers: {
        addtoBasket: (state, action) => {
            const  target=state.items.find(item=>item.id==action.payload._id)
            if(target){
                target.count=target.count+1
                target.totalPrice=target.count * target.product.price
                state.items=[...state.items.filter(item=>item.id!==target.id),target]
                localStorage.setItem("basketItems",JSON.stringify([...state.items]))
            }else{
                
                const basketItem={
                    id:action.payload._id,
                    product:action.payload,
                    count:1,
                    totalPrice:action.payload.price
    
                }
                state.items=[...state.items,basketItem]
                localStorage.setItem("basketItems",JSON.stringify([...state.items]))
          
            }
            toast.success('Successfully toasted!')

        },
        deleteFromBasket:(state,action)=>{
            console.log( "lsklklk", action.payload)
            state.items=state.items.filter(item=>item.id != action.payload.id)
            state.items=[...state.items]
            localStorage.setItem("basketItems",JSON.stringify([...state.items]))
        },
        decreasebtn:(state,action)=>{
            const target=state.items.find(item=>item.id==action.payload.id)
            if(target.count>1){
                target.count=target.count-1
                target.totalPrice=target.count * target.product.price
                state.items=[...state.items]
                localStorage.setItem("basketItem",JSON.stringify([...state.items]))
            }else{
                state.items=state.items.filter(item=>item.id != action.payload)
                localStorage.setItem("basketItems",JSON.stringify(state.items))
            }
           
        },
        increaseBtn:(state,action)=>{
            const target=state.items.find(item=>item.id==action.payload.id)
            target.count=target.count+1
            target.totalPrice=target.count * target.product.price
            state.items=[...state.items]
            localStorage.setItem("basketItem",JSON.stringify([...state.items]))
        }
    }


})
export const { addtoBasket,deleteFromBasket,decreasebtn,increaseBtn } = BasketSlice.actions
export default BasketSlice.reducer