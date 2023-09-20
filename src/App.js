import React from 'react'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"
import "./style/Style.css"
import Navbar  from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Contact from './components/Contact'
const App = () => {
  return  (  
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
  </Router>
    )
  
}

export default App
