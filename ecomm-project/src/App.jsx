import{Routes,Route} from 'react-router'
import {HomePage} from './pages/Home-page'
import {CheckOutPage} from './pages/checkout/CheckOutPage'
import {Orders} from './pages/Orders'
import {Tracking} from './pages/Tracking'
import {PageNotFound} from './pages/PageNotFound'
import { useEffect,useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
const[cart,SetCart]=useState([])

useEffect(()=>{
     axios.get('/api/cart-items?expand=product')
          .then((res)=>{
            SetCart(res.data)
          })
},[])


  return (
    <Routes>
       <Route index element={< HomePage  cart={cart}/>} />
       <Route path='checkout' element={<CheckOutPage cart={cart}/>} />
       <Route path='orders' element={<Orders />} />
       <Route path='tracking' element={<Tracking />} />
       <Route path='*' element={<PageNotFound />} />
    </Routes>
  
  )
}

export default App
