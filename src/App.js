import React from 'react'
import NavBar from './components/NavBar'
import Item from './components/Item'


import Cart from './components/Cart'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Item/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App