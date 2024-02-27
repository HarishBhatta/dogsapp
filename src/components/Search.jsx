import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import styles from './search.module.css'

const Search = () => {
  const { isOpen, handleClose } = useContext(SearchContext);
  return (
    <div className={` ${isOpen ? 'top-0' : '-top-full'} w-screen left-0 right-0 absolute h-1/2 shadow-2xl transition-all duration-300 z-20 bg-white`}>

          <div className="w-full h-16 mt-[5.35%] ml-[82%]" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30S" stroke-width ="10" className='' fill="gray" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </div>
          <p className="text-lg text-slate-500 font-medium ml-12">What are you looking for?</p>
          <input className ='ml-12 w-[80%] mt-5 select-none border-b-slate-300 border-b-[3px] outline-none placeholder:text-slate-500 font-bold text-2xl  pl-1 pb-0 search' type="search" id="gsearch" name="gsearch" placeholder='Search Products'></input>             
    </div>
  );
}

export default Search;