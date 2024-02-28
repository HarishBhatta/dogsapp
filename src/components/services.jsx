"use client";
import { useState } from 'react';
import Link from 'next/link';
export default function Services(){
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
    return(
        <div className="dropdown bg-white">
        <button onClick={handleOpen} className='outline-none'>Services</button>
        {open ? (
          <ul className="menu z-30 right-[1px] bg-white select-none" id='item '>
            <li className="menu-item hover:border-l-blue border-l-4 ">
              <button className=' text-lg font-medium text-slate-800'><Link href="/login">Vaccination</Link></button>
            </li>
            <li className="menu-item hover:border-l-blue border-l-4">
              <button className=' text-lg font-medium text-slate-800'><Link href="/shop">Shop</Link></button>
            </li>
          </ul>
        ) : null}
      </div>
    );
}