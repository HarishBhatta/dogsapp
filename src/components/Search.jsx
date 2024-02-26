import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';


const Search = () => {
  const { isOpen } = useContext(SearchContext);
  return (
    <div className={` ${isOpen ? 'h-[50vh]' : 'h-0'} w-full bg-red-700 fixed top-[30vw] h-1/3 shadow-2xl transition-all duration-300 z-20`}>
      <div className= 'flex items-center justify-between py-6 border-b'>
        <div className= 'uppercase text-sm font-semibold'>Search</div>        
      </div>
    </div>
  );
}

export default Search;