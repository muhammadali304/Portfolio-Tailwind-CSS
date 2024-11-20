"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='flex h-20 justify-between bg-black text-white border-b border-white px-4 md:px-8 leading-tight'>

      {/* Logo Section */}
      <div className='flex items-center justify-center w-1/5 font-bold'>
        Ali Yousuf
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center justify-around w-3/5 '>
        <ul className='gap-4 md:gap-20 md:flex font-bold'>
          <li className='menuLink'><Link href="/">Home</Link></li>
          <li className='menuLink'><a href="/projects">Projects</a></li>
          <li className='menuLink'><a href="/skills">Skills</a></li>
          <li className='menuLink'><a href="/about">About</a></li>
          <li className='menuLink'><a href="/contact">Contact</a></li>
 
        </ul>

        <FiMenu className='md:hidden'/>

      </div>

      {/* Mobile Menu Icon */}

      <div className="flex items-center md:hidden">
        {isMobileMenuOpen? (
          <FiX onClick={toggleMobileMenu} size={24} className="cursor-pointer" />
        ) : (
          <FiMenu onClick={toggleMobileMenu} size={24} className="cursor-pointer"/>
        )}
      </div>

      {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div className="z-10 absolute top-20 left-0 w-full bg-black text-white p-4">
          <ul className="flex flex-col items-center gap-2 font-bold py-2">
            <li className="menuLink">
              <Link href="/" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li className="menuLink">
              <a href="/projects" onClick={toggleMobileMenu}>Projects</a>
            </li>
            <li className="menuLink">
              <a href="/skills" onClick={toggleMobileMenu}>Skills</a>
            </li>
            <li className="menuLink">
              <a href="/contact" onClick={toggleMobileMenu}>Contact</a>
            </li>
            <li className="menuLink">
              <a href="/about" onClick={toggleMobileMenu}>About</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar