import React from 'react'
import logo from '../../assets/image/Connect Shift.png'
import social from '../../assets/image/social.png'
import {Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className=' px-[120px] bg-blue-100 py-[25px]'>
      <div  className='flex justify-between py-5 border border-b-black'>
        <div className='flex justify-between '>
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
          <img src={social} alt="social" className='h-10'/>
          
        </div>
       
        </div>
        
        <div className=' flex justify-center gap-96  '>
          <div><p className='mt-6'>
          © 2024 Bhawani Infotech. All rights secured—because we’re not sharing.</p></div>
          <div className='flex gap-6 mt-6'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        </div>
        
   
  )
}

export default Footer