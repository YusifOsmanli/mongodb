import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import "./style.css"

function Cards() {
    const dispatch=useDispatch()
    const data=useSelector(state=>state.data.data)

  return (
   <div className='all'>
    
    {
        data.map((item,index)=>{
            return(<Card item={item} key={index}/>)
        })
    }
   </div>
   
  )
}

export default Cards
