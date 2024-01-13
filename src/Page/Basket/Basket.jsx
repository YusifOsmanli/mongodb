import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromBasket } from '../../redux/slice/BasketSlice'
import { decreasebtn } from '../../redux/slice/BasketSlice'
// import { addtoBasket } from '../../redux/slice/BasketSlice'
import { increaseBtn } from '../../redux/slice/BasketSlice'
import { Link } from 'react-router-dom'
import "./basket.css"
import { Toaster } from 'react-hot-toast'
function Basket() {
  const dispatch=useDispatch()
  const data=useSelector(state=>state.basket.items)
  const deletefrombasket=useSelector(state=>state.basket.items)
  console.log("data" ,data)
  let BasketTotalPrice=0
  return (
 <>
    <div>
       <thead>
    <tr>
      {/* <th scope="col">picture</th> */}
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th>increse</th>
      <th scope="col">count</th>
      <th>decrase</th>
      <th>price</th>
      <th>totalprice</th>
      <th>delete</th>
     
    </tr>
  </thead>
    <div className='basket__div'>
    {
        data.map((item,index)=>{
          BasketTotalPrice+=Math.ceil(item.totalPrice)
         return(
          <tbody>
          <tr>
            {/* <th scope="row"><img src={item.product.image} alt="" /></th> */}
            <td>{item.product._id}</td>
            <td>{item.product.title}</td>
            <td className='button1'><button  onClick={()=>{dispatch(increaseBtn(item))}}>increase</button></td>
            <td>{item.count}</td>
            <td className='button2'><button onClick={()=>{dispatch(decreasebtn(item))}}>decrase</button></td>
            <td>{item.product.price}</td>
            <td>{item.totalPrice}</td>
            <td className='button3'><button onClick={()=>{dispatch(deleteFromBasket(item))}}>delete</button></td>
           
          </tr>
          </tbody>

         ) 
        })
      }
    </div>
    <h1>
      TotalPrice ={BasketTotalPrice} AZN
    </h1>
    </div>
    <Toaster/>
 </>
  )
}

export default Basket
