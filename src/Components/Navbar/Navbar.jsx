import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png' 
import cart_icon from '../Assets/shopping-cart-2-line.svg'
const Navbar = () => {

    const [menu,setMenu]= useState("women");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='mylogo' src={logo} alt="" />
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("women")}}>Women{menu==="women"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("men")}}>Men{menu==="men"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("customize")}}>Customize{menu==="customize"? <hr/>:<></>} </li>
      </ul>
      <div className='nav-title'><p>VIBE</p></div>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src= {cart_icon} alt=''/>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar;