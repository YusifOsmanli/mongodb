import React, { useEffect } from 'react'
import { getData } from './redux/slice/DataSlice'
import { useDispatch } from 'react-redux'
import Cards from './companents/Cards'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Routes from './index.Root'
const router=createBrowserRouter(Routes)
function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [])
  return (
    <div>
      
      <RouterProvider  router={router}/>
    </div>
  )
}

export default App

