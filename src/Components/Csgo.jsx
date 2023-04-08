import React from 'react'
import { useState, useEffect } from 'react'
import sanityClient from '../Client';
import Product from './Product';

const Csgo = () => {
  const [products, setProducts] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "csgo"]{
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
    <div className='w-full h-[100vh] flex justify-center flex-wrap'>
            {products &&
					products.map((product) => (
						<Product product={product} />
					))}
    </div>
  )
}

export default Csgo