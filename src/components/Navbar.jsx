import React from 'react'
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className=' m-16'>
       <nav className=' flex justify-between items-center flex-wrap w-auto'>
           <img src={Logo} alt='logo'/>
           <div className=' flex items-center gap-8 text-xl font-medium lg:text-xl sm:text-base'>
                <p className=' cursor-pointer'>About us</p>
                <p className=' cursor-pointer'>Services</p>
                <p className=' cursor-pointer'>Use Cases</p>
                <p className=' cursor-pointer'>Pricing</p>
                <p className=' cursor-pointer'>Blog</p>
                <a href='#'><button className=' px-4 py-3 rounded-lg border-2 border-black'>Request a quote</button></a>
           </div>
       </nav>
    </div>
  )
}

export default Navbar

