import { useState, useEffect } from 'react'
import { AppStyle } from './App.styles'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/organisms/Sidebar/Sidebar'
import RoutesComponent from './routes/Routes'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from './redux/features/meals/products'
import { Store } from './interfaces/store'
import { Meals } from './interfaces/meals'
function App() {    
  
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getAllProducts()) 
    },[dispatch])

  return (
    <AppStyle>
      <Sidebar />
      <RoutesComponent /> 
      <Outlet />
    </AppStyle>
  )
}

export default App
