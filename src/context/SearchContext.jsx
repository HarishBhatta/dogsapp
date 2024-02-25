"use client";
import { useState, createContext } from 'react'
import NavBar from '../components/navbar';
export const SearchContext = createContext();
const SearchProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  }
  return (
    <SearchContext.Provider value={{ isOpen, setIsOpen, handleClose}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;