import React from 'react'
import { useState, useEffect } from 'react'
import sanityClient from '../Client';
import Product from './Product';

const Dota2 = () => {
  const [products, setProducts] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "dota2"]{
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
    }`
			)
			.then((data) => setProducts(data))
			.catch(console.error);
	}, []);


  return (
    <div className='w-full h-[100vh] flex justify-between flex-wrap'>
            {products &&
					products.map((product) => (
						<Product product={product} key={product.name}/>
					))}
    </div>
  )
}

export default Dota2