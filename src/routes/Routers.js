import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../page/home/Index'


export default function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
  )
}