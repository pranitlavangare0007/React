import{Routes,Route} from 'react-router'
import {HomePage} from './pages/Home-page'
import {CheckOutPage} from './pages/checkout/CheckOutPage'
import {Orders} from './pages/Orders'
import {Tracking} from './pages/Tracking'
import {PageNotFound} from './pages/PageNotFound'
import './App.css'

function App() {
  

  return (
    <Routes>
       <Route index element={< HomePage />} />
       <Route path='checkout' element={<CheckOutPage />} />
       <Route path='orders' element={<Orders />} />
       <Route path='tracking' element={<Tracking />} />
       <Route path='*' element={<PageNotFound />} />
    </Routes>
  
  )
}

export default App
