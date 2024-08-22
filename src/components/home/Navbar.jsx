import React from 'react'
import logo from '../../assets/image/Connect Shift.png'
import {Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex justify-between top-[8px] px-[120px] py-[25px]'>
        <div>
        <Link to="/Home">
        <img src={logo} alt='logo'className='w-[215.3px] h-[48px]'/> </Link>
        </div>
        <div className='flex gap-[32px] px-4 py-2'>
            <ul className='flex gap-[42px] '>
               <li> <Link to="/">Home</Link></li>
               <li><Link to="/Features"> Features</Link></li>
               <li><Link to="/Howitworks">How it work</Link></li>
               <li><Link to="/Pricing">Pricing</Link>
               </li>
               <li>
                <Link to="/Contactus">Contact Us</Link>
               </li>
               
            </ul>
        </div>
        <div className='flex gap-[30px]'>
          <Link to='/Signin'><button className='
          px-4 py-2'>Sign in</button></Link>
          <Link to='/Startfree'><button className='bg-[#00A1FF] text-white rounded-lg px-4 py-2  '>Start Free</button></Link>
        </div>
    </nav>
  )
}

export default Navbar