import React from 'react'

const Card = ({image, title, classes}) => {
  return (
    <div className='flex items-center flex-col m-[4rem] bg-[#212529] rounded-lg  cursor-pointer hover:scale-110 ease-in-out duration-300 '>
        <img className='w-[100] mb-[10px] h-[200px]' src={image} alt="/" />
        <h4>{title}</h4>
        <h5>{classes}</h5>
    </div>
  )
}

export default Card