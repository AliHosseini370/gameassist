import React from 'react'
import Card from './Card'
import Dota from '../images/Dota.jpg'
import FIFA22 from '../images/FIFA22.jpg'
import CounterStrike2 from '../images/CounterStrike2.jpg'
import { Link } from 'react-router-dom'

const Select = () => {
  return (
    <div className='selectGame flex justify-center flex-col p-8 border-solid border-[#23272f] border-b-[1px]'>
      <div>
        <h1 className='text-center mb-[2rem] text-[35px]'>انتخاب کن و <span className='text-[#ff6600]'>ادامه بده</span></h1>
      </div>
      <div className='flex justify-center'>
        <Link to='/csgo'><Card image={CounterStrike2} title='CounterStrike' classes='26 classes' /></Link>
        <Link to='/dota2'><Card image={Dota} title='Dota 2' classes='44 classes' /></Link>
        <Card image={FIFA22} title='Fifa 22' classes='5 classes' />
      </div>
    </div>
  )
}

export default Select