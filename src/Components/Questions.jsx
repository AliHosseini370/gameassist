import React from 'react'
import { useState } from 'react'

const Questions = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)
  const [field3, setField3] = useState(false)
  const [field4, setField4] = useState(false)

  return (
    <div className='flex flex-col justify-center items-center p-8 border-solid border-[#23272f] border-b-[1px]'>
      <div className='text-center mb-[2rem]'>
        <h1 className='text-[50px]'>سوالات <span className='text-[#ff6600]'>متداول</span></h1>
      </div>
      <div className='flex flex-col text-right'>
        <div style={{paddingBottom: field1 ? '80px' : '1px'}} className='flex items-end justify-end p-4 bg-[#23272f] mb-[1rem] w-[900px] cursor-pointer rounded-[6px] flex-col transition-all duration-500 hover:bg-[#2f333b]' onClick={ () => setField1(!field1)}>
          <div className='mb-[1rem]'><span>گیم اَسیست چیه؟</span></div>
          <p  style={{ visibility: field1 ? 'visible' : 'hidden'}} className='w-full h-[1px] transition-all duration-300'>گیم اَسیست بهترین مجموعه آموزشی برای شما گیمر های عزیزه تا بتونید توی بازی های مورد علاقتون پیشرفت کنین.در این مجموعه بهترین پلیر های ایرانی حاضر شدند با ویدیو های آموزشیشون به شما کمک کنند تا بتونید کیفیت بازیتون رو بالا ببرید</p>
        </div>
        <div style={{paddingBottom: field2 ? '80px' : '1px'}} className='flex items-end justify-end p-4 bg-[#23272f] mb-[1rem] w-[900px] cursor-pointer rounded-[6px] flex-col transition-all duration-500 hover:bg-[#2f333b]' onClick={ () => setField2(!field2)}>
          <div className='mb-[1rem]'><span>گیم اَسیست برای چه کسانی مناسبه؟</span></div>
          <p  style={{ visibility: field2 ? 'visible' : 'hidden'}} className='w-full h-[1px] transition-all duration-300'>گیم اَسیست برای تمام گیمرهایی که دوست دارن توی بازی مورد علاقشون توی سریع ترین زمان ممکن پیشرفت کنن بهترین گزینس.از طریق این سایت رنک آپ کردن برای شما بسیار راحت تر میشه</p>
        </div>
        <div style={{paddingBottom: field3 ? '80px' : '1px'}} className='flex items-end justify-end p-4 bg-[#23272f] mb-[1rem] w-[900px] cursor-pointer rounded-[6px] flex-col transition-all duration-500 hover:bg-[#2f333b]' onClick={ () => setField3(!field3)}>
          <div className='mb-[1rem]'><span>ویدیو های آموزشی به چه صورته؟</span></div>
          <p  style={{ visibility: field3 ? 'visible' : 'hidden'}} className='w-full h-[1px] transition-all duration-300'>بعد از خریداری پکیج مورد نظرتون بلافاصله ویدیو های آموزشی براتون نمایش داده میشه و میتونین از اونا استفاده کنین</p>
        </div>
        <div style={{paddingBottom: field4 ? '80px' : '1px'}} className='flex items-end justify-end p-4 bg-[#23272f] mb-[1rem] w-[900px] cursor-pointer rounded-[6px] flex-col transition-all duration-500 hover:bg-[#2f333b]' onClick={ () => setField4(!field4)}>
          <div className='mb-[1rem]'><span>آیا مجموعه ی گیم اَسیست نسخه موبایل هم داره؟</span></div>
          <p  style={{ visibility: field4 ? 'visible' : 'hidden'}} className='w-full h-[1px] transition-all duration-300'>در حال حاضر خیر ولی به زودی راه اندازی میشه</p>
        </div>
      </div>
    </div>
  )
}

export default Questions