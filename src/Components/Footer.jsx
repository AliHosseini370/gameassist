import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsDiscord } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between p-8 bg-black w-full h-[250px] items-start'>
        <div className='flex flex-1 flex-col'>
          <h1 className='mb-[10px]'>Our Games</h1>
          <Link to='/dota2' className='mb-[10px] text-gray-600 hover:text-white'>Dota 2</Link>
          <Link to='./csgo' className='mb-[10px] text-gray-600 hover:text-white'>Counter Strike</Link>
          <Link to='/' className='mb-[10px] text-gray-600 hover:text-white'>FIFA22</Link>
        </div>
        <div className='flex flex-col justify-center items-center flex-1'>
          <h1 className='mb-[10px]'>Social Media</h1>
          <div className='flex flex-row'>
            <a href="///"><BsInstagram className='text-gray-600 hover:text-white'/></a>
            <a href="///" className='ml-[2.5rem]'><BsDiscord className='text-gray-600 hover:text-white'/></a>
          </div>
        </div>
        <div className='flex flex-1 flex-col justify-end text-right'>
          <h1>گیم اسیست</h1>
          <p className='text-gray-600'>گیم اَسیست بهترین مجموعه آموزشی برای شما گیمر های عزیزه تا بتونید توی بازی های مورد علاقتون پیشرفت کنین.در این مجموعه بهترین پلیر های ایرانی حاضر شدند با ویدیو های آموزشیشون به شما کمک کنند تا بتونید کیفیت بازیتون رو بالا ببرید</p>
        </div>
      </div>
      <div className='flex bg-black pl-6 pb-6 items-center justify-between'>
        <p>© 2022 Game Assist</p>
        <p className='flex pr-6'><FaLock className='mr-[10px]' /> Secured with SSL</p>
      </div>
    </div>
  )
}

export default Footer