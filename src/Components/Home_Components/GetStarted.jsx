import React from 'react'
import getstartedImage from '../../images/getStartedImage.png'

const getstarted = () => {
  return (
    <div className='flex justify-center w-full h-full p-8 flex-col border-solid border-[#23272f] border-b-[1px]'>
      <div className='text-center'>
        <h1 className='text-[30px] text-[#ff6600]'>چطور باید شروع کنم ؟؟؟</h1>
        <h4 className='text-[25px]'>!فقط با 3 قدم ساده میتونی به رنکی که لایقشی  تو بازی مورد علاقت برسی</h4>
      </div>
      <div className='flex flex-row items-center'>
        <div className='flex flex-1 flex-col justify-end'>
          <div className='flex flex-col justify-end text-right border-solid border-[1px] rounded-[6px] border-[#23272f] m-4  p-2 bg-[#0b0f17] hover:animate-bounce'>
            <div className='flex justify-end'>
              <h1 className='text-[25px] font-black italic'>بازی مورد علاقتو انتخاب کن</h1>
              <h1 className='text-[25px] text-[#ff6600] font-black'>.1</h1>
            </div>
            <h4>از بین بازی های موجود یکی رو انتخاب کن</h4>
          </div>
          <div className='flex flex-col justify-end text-right border-solid border-[1px] rounded-[6px] border-[#23272f] m-4 p-2 bg-[#0b0f17] hover:animate-bounce'>
            <div className='flex justify-end'>
              <h1 className='text-[25px] font-black italic'>یک مربی انتخاب کن</h1>
              <h1 className='text-[25px] text-[#ff6600] font-black'>.2</h1>
            </div>
            <h4>مربی مناسب رو برای بازیت انتخاب کن</h4>
          </div>
          <div className='flex flex-col justify-end text-right border-solid border-[1px] rounded-[6px] border-[#23272f] m-4 p-2 bg-[#0b0f17] hover:animate-bounce'>
            <div className='flex justify-end'>
              <h1 className='text-[25px] font-black italic'>تغییر رو احساس کن</h1>
              <h1 className='text-[25px] text-[#ff6600] font-black'>.3</h1>
            </div>
            <h4>حالا میتونی پیشرفتت رو توی مچ های بعدی احساس کنی</h4>
          </div>
        </div>
        <div className='flex flex-1'>
          <img className='w-full h-full' src={getstartedImage} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default getstarted