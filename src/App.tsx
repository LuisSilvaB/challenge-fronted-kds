import { useEffect } from 'react'
import { AppStyle } from './App.styles'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/organisms/Sidebar/Sidebar'
import RoutesComponent from './routes/Routes'
import {useDispatch } from 'react-redux'
import { getAllProducts } from './redux/features/meals/products'
import { AppDispatch } from './redux/app/store';
function App() {    
  
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(getAllProducts());
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
