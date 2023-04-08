import React from 'react'
import sanityClient from '../Client';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let { slug } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityClient.fetch(`*[slug.current == "${slug}"][0]{
        name,
        slug,
        details,
        price,
        image{
          asset->{
            _id,
            url
          },
        },
      }`);
      setProducts(data);
    }
    fetchData()
  }, [])
  

  return (
    <div className='flex justify-center w-full h-full p-8 flex-col'>
    <div className='flex flex-row items-center'>
      <div className='flex flex-1 flex-col justify-end'>
        <div className='flex flex-col justify-end text-right m-10'>
          <div className='flex justify-end'>
            <h1 className='text-[25px] font-black italic'>{products&& products.name}</h1>
          </div>
        </div>
        <div className='flex flex-col justify-end text-right m-10'>
          <div className='flex justify-end'>
            <h4 className='text-[15px] font-black italic'>{products&& products.details}</h4>
          </div>
        </div>
        <div className='flex flex-col justify-end text-right m-10'>
          <div className='flex justify-end'>
            <h1>تومان</h1>
            <h1 className='text-[25px] font-black italic'>{products&& products.price}</h1>
          </div>
        </div>
        <div className='flex flex-col justify-end text-right m-10'>
          <div className='flex justify-end'>
            <button className='bg-[#ff6600] text-black mx-[1rem] px-[2.5rem] w-full mb-[1rem] py-[12px] rounded-[10px] cursor-pointer hover:bg-white transition-all duration-500'>Buy</button>
          </div>
        </div>
      </div>
      <div className='flex flex-1'>
        <img className='w-full h-full' src={products&& products.image.asset.url} alt="productImage" />
      </div>
    </div>
  </div>
  )
}

export default ProductPage