import React, {useContext} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import Basket from '../pages/Basket/Basket';
import Brands from '../pages/Brands/Brands';
import Checkout from '../pages/Checkout/Checkout';
import Contact from '../pages/Contact/Contact';
import CreateProduct from '../pages/CreateProduct/CreateProduct';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Order from '../pages/Order/Order';
import Product from '../pages/Product/Product';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
import Shop from '../pages/shop/Shop';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import {CustomContext} from "../Context";

const Layout = () => {

  const location = useLocation()
  const {user} = useContext(CustomContext);

  return (
    <div>
      {
        location.pathname !== '/login' && location.pathname !== '/register' ? <Header/> : ''
      }
      <Routes>
        {user.email !== 'avardanyan955@gmail.com' ? <Route path='/' element={<Home/>}/> : ''}
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/create' element={<CreateProduct/>}/>
        {user.email === 'avardanyan955@gmail.com' ? <Route path='/*' element={<AdminPanel/>}/> : ''}
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      {
           location.pathname === "/login"
        || location.pathname === "/register"
        || location.pathname === "/admin"
        ? '' : <Footer/>
      }
    </div>
  )
}

export default Layout