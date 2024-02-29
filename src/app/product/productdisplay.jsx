"use client";
// PetProducts.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { petProducts } from '../../components/products';

const PetProducts = () => {
  return (
    <div className="flex flex-wrap gap-4 px-9 ml-20">
      {petProducts.map((product) => (
        <div key={product.id} className="border bg-white h-72 group hover:cursor-pointer object-top w-52 relative">
          <Link href={`/product/${product.id}`}>
            <Image src={product.image} alt={product.name} fill={false} quality={100} className='w-full h-[65%] object-contain' />
            <div className="mt-4 mx-1">
              <h2 className="text-lg font-normal mt-2 truncate text-center">{product.name}</h2>
              <div className="flex gap-7">
                <p className="font-semibold text-lg line-through decoration-2 text-slate-400 ml-4">{product.oldprice}</p>
                <p className="font-semibold text-lg text-blue">{product.price}</p>
              </div>

            </div>
          </Link>


        </div>
      ))}
    </div>
  );
};

export default PetProducts;
