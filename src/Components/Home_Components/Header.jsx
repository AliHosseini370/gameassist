import React from 'react'
import DotaHeader from '../../images/DotaHeader.jpg'
import FIFA23 from '../../images/FIFA23_auto_x2.jpg'
import CounterStrike from '../../images/CounterStrike.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const header = () => {
  return (
    <div className='flex justify-center items-center mb-[4rem] border-solid border-[#23272f] border-b-[1px]'>
        <Carousel className='w-full h-full'  showThumbs={false} showStatus={false} infiniteLoop={true} emulateTouch={true} autoPlay={true}>
          <div>
            <img className='w-[800] h-[500px]' src={CounterStrike} alt="CounterStrike" />
          </div>
          <div>
            <img className='w-[800] h-[500px]' src={DotaHeader} alt="Dota" />
          </div>
          <div>
            <img className='w-[800] h-[500px]' src={FIFA23} alt="FIFA22" />
          </div>
        </Carousel>
    </div>
  )
}

export default header