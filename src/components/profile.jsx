"use client";
import { useState } from 'react';
import Link from 'next/link';

const Profile = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}><svg xmlns="http://www.w3.org/2000/svg" width="18"   height="18" fill="currentColor" viewBox="0 0 16 16">
     <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/></svg></button>
      {open ? (
        <ul className="menu z-10 right-4 bg-white pt-3 w-[250px] border-none rounded-md" >
          <li className="menu-item bg-blue important:true mx-7 rounded-md w-[190px] mt-4 ">
            <button className='text-center text-white text-xl font-semibold'><Link href='/login'>Login</Link> </button>
          </li>
          <li className="menu-item mt-5">
            <p className="text-center text-slate-400 mb-3">No account yet?<button className='ml-2 text-black'><Link href='/register'>Register</Link></button></p>
            
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Profile;