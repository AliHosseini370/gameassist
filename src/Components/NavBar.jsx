import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-[#0e131d] h-[56.5px] sticky flex items-center justify-between w-full z-10 py-[0.5rem] pr-[2rem] text-white top-0 border-solid border-[#23272f] border-b-[1px]'>
        <div>
          <Link to='/login'><button className='bg-transparent	 text-gray-500 mx-[1rem] px-[2.5rem] py-[6px] rounded-[3px] border-solid border-[1px] border-[#23272f] hover:text-white transition-all duration-500'>ورود</button></Link>
          <Link to='/register'><button className='bg-[#ff6600]	 text-black mx-[1rem] px-[2.5rem] py-[6px] rounded-[3px] hover:bg-white transition-all duration-500'>ثبت نام</button></Link>
        </div>
      <div className='flex justify-end items-center'>
        <div className='flex'>
          <p className='font-medium text-[18px] leading-[25px] mx-[1rem] hover:scale-125 hover:animate-pulse transition-all duration-500'><a href="#">مربیان</a></p>
          <p className='font-medium text-[18px] leading-[25px] mx-[1rem] hover:scale-125 hover:animate-pulse transition-all duration-500'><a href="#">فروشگاه</a></p>
        </div>
        <div className='flex ml-8'>
          <Link to='/'><img className='w-full h-20 hover:animate-pulse' src={logo} alt="logo" /></Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar