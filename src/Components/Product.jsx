import React from 'react'
import { Link } from 'react-router-dom'

const Product = ( {product} ) => {
  return (
    <Link to={'/dota2/' + product.slug.current}>
      <div className='flex flex-col bg-[#2b2f39] w-[250px] h-[250px] rounded-2xl m-8 p-2 text-right hover:bg-[#30343d] transition-all duration-500'>
        <div className='flex justify-center mb-4'>
          <img src={product.image.asset.url} alt={product.name}/>
        </div>
        <div className='mb-4 border-b'>
          <h4>{product.name}</h4>
        </div>
        <div className='items-end'>
          <h4>{product.price + ' : قیمت'}</h4>
        </div>
    </div>
    </Link>
  )
}

export default Product