"use client";
import { useState } from "react";
import Image from "next/image";
import { petProducts } from "../../../components/products";
export default function ProductDetails({params}) {
  const [value, setValue] = useState(0);
  const id = params.id;
  const product = petProducts.find((item) => item.id === parseInt(id));
  return (
    <div>
      <div className="flex pt-16 bg-teal-50 pb-16 md:flex-none">
      <div className="w-[25%] ml-[15%] h-80 relative">
      <Image
      src={product.image}
      alt="image"
      fill={true}
      objectFit="contain"      />
      </div>
      
      <div className="w-1/2  pl-16 tracking-widest">
        <h1 className="text-3xl font-bold ">{product.name}</h1>
        <h2 className="text-xl font-semibold">({product.category})</h2>
        <p className="text-xl font-semibold text-slate-400 line-through mt-3">{product.oldprice}</p>
        <p className="text-xl font-semibold text-blue">{product.price}</p>
        <h1 className="text-2xl font-bold mt-3 text-blue">Description</h1>
        <p className="text-justify font-medium text-slate-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum dolores error fugit libero eaque, aspernatur quae. Vitae, temporibus, culpa aut corporis odio, quibusdam possimus pariatur nostrum tempore adipisci eaque?</p>
        <div className="flex mt-5">
          <div className="border-slate-400 border-[1px] rounded-md w-40 h-12 pt-2 hover:cursor-pointer gap-5 pl-5 flex select-none">
            <div className="text-2xl font-bold" onClick={() => {if(value>0){setValue(value-1)} else{setValue(value)}}}>-</div>
            <div className="text-xl">{value}</div>
            <div className="text-2xl hover:cursor-pointer font-bold" onClick={() => {setValue(value+1)}}>+</div>
          </div>
        <button className="bg-blue w-[520px] text-white rounded-md h-12 ml-10 select-none text-xl font-semibold" onClick={() => {alert("added to cart")}}>Add to cart</button>

        </div>
      </div>
      
    </div>
    </div>
    
    
  )
}
