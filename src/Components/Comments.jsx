import React from 'react'
import { useState } from 'react'

const Comments = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('')

  const sendData = () => {
    console.log(name , email, text);
  }

  return (
    <div className='comments flex justify-center items-center p-8 flex-col border-solid border-[#23272f] border-b-[1px]'>
      <h1 className='mb-[4rem] text-[50px]'>نظرات و <span className='text-[#ff6600]'>پیشنهادات</span></h1>
      <form className='flex flex-col justify-center items-center'>
        <input type="text" placeholder='نام' required onChange={ (e) => setName(e.target.value)} className='w-[400px] h-[50px] mb-[2rem] p-4 bg-[#23272f] text-right text-[20px]'/>
        <input type="email" placeholder='ایمیل' required onChange={ (e) => setEmail(e.target.value)} className='w-[400px] h-[50px] mb-[2rem] p-4 bg-[#23272f] text-right text-[20px]' />
        <textarea name="comments" cols="30" rows="10" required onChange={ (e) => setText(e.target.value)} className='w-[400px] h-[150px] mb-[2rem] p-[10px] bg-[#23272f] text-right text-[20px]'></textarea>
        <input type="submit"value='ثبت' onClick={sendData} className='bg-[#ff6600]	 text-black mx-[1rem] px-[2.5rem] py-[6px] rounded-[3px] cursor-pointer hover:bg-white transition-all duration-500'/>
      </form>
    </div>
  )
}

export default Comments