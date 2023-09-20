import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Nav.css"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import { useSelector } from 'react-redux'
import {BiCart} from"react-icons/bi"
const Navbar = () => {
  const {cartitem} = useSelector(state=>state.cart);
  function menuFun(){
    let menuBtn=document.querySelector(".menu");
    let main=document.querySelector(".main");
    menuBtn.style="display:none;"
    main.style="display:flex;"
  }
  function closefun(){
    if (window.innerWidth < 430) {
      let menuBtn=document.querySelector(".menu");
      let main=document.querySelector(".main");
      menuBtn.style="display:block;"
      main.style="display:none;"
    }
  }
  return (
    <nav className='navbar'>
        <h4 className='logoName'>FashionHub</h4>
        <main className='main'>
        <img className='close'  onClick={closefun} src={close} alt="" />
            <Link onClick={closefun} className='nava'  to="/">Home</Link>
            <Link onClick={closefun} className='nava'  to="/Cart"><BiCart className='carticon'/> <span className='cartval'>{cartitem.length}</span></Link>
            <Link onClick={closefun} className='nava'  to="/Contact">Contact</Link>
        </main>
        <img onClick={menuFun}  className="menu" src={menu} alt="" />
    </nav>
  )
}

export default Navbar