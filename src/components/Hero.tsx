"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    
    <div className='flex flex-col md:flex-row min-h-screen bg-black text-white'>

      <div className='flex items-center justify-center w-full md:w-2/4 p-4'>
        
        <div className='relative w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-600 pt-6 md:p-4'>
          <Image 
            src= "/Profile Picture.jpg"
            alt='Profile Picture'
            height={900}
            width={900}
          />
        </div>

      </div>

      <div className='flex items-center justify-center md:justify-start w-full md:w-2/4 p-4'>

        <div className='text-4xl md:text-8xl font-extrabold' data-aos="zoom-in" data-aos-duration="1000" >
          <h1>I am <br /> Ali <br /> Yousuf</h1>
        </div>

      </div>

    </div>

  )
}

export default Hero
