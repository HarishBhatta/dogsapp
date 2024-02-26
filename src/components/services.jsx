"use client";
import * as React from 'react';
import Link from 'next/link';
export default function Services(){
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
    return(
        <div className="dropdown bg-white">
        <button onClick={handleOpen} className='outline-none'>Services</button>
        {open ? (
          <ul className="menu z-10 bg-white" id='item'>
            <li className="menu-item hover:border-l-blue border-l-4 ">
              <button className=' text-2xl font-semibold'><Link href="/register">Vaccination</Link></button>
            </li>
            <li className="menu-item hover:border-l-blue border-l-4">
              <button className=' text-2xl font-bold'><Link href="/register">Grooming</Link></button>
            </li>
          </ul>
        ) : null}
      </div>
    );
}