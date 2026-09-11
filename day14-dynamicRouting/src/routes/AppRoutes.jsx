import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<ProtectedRoutes><About/></ProtectedRoutes>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/detail/:id' element={<ProductDetail/>}/> 
      </Routes>
    </div>
  )
}

export default AppRoutes
