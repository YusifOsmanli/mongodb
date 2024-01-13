import React from 'react'
import "./style.css"
import { addtoBasket } from '../redux/slice/BasketSlice'
import { useDispatch } from 'react-redux'
function Card({item}) {
    const dispatch=useDispatch()
  return (
    <div className='cardd' style={{ width:"285px"}}>
        <div className="card" style={{width: "18rem;" ,border:"1 px solid black",width:"180px"}}>
     <div><img src={item.image} alt="" style={{marginLeft:"20px", marginTop:"7px", width:"250px"}} /></div>
  <div class="card-body" style={{}}>
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <p>{item.price}  AZN</p>
    <button style={{backgroundColor:"green", border:"none", color:"white", height:"30px", marginBottom:"10px"}} onClick={()=>dispatch(addtoBasket(item))}>add to basket</button>
  </div>
</div>
      
    </div>
  )
}

export default Card
