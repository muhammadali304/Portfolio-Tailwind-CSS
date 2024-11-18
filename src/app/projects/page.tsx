"use client";

import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"

export default function Projects  ()  {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='bg-black min-h-screen'>

        <div className='flex items-center justify-center text-3xl md:text-5xl py-5 md:py-10'>
          <h1><b>My Projects</b></h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around w-full py-10 p-4 hover:shadow-lg border-20 border-grey-500" data-aos="fade-down" data-aos-duration="750" data-aos-delay="100">

          <div className='border-2 border-gray-700 mt-12'>
              <img src="/Countdown.jpg" alt="Countdown Timer" /> 

              <div className="flex justify-center text-lg md:text-2xl mt-8">
                  <p>Countdown Timer</p> <br />
              </div>

              <div className="flex justify-center mt-4 p-4">
                  <p>A Next.js and Typescript powered website to track your time <br /> with an interactive countdown.</p>
              </div>

              <div className='flex items-center justify-center gap-6 my-4'>
                <p className='bg-blue-400 py-1 px-3 rounded-sm'>Next JS</p>
                <p className='bg-purple-400 py-1 px-3 rounded-sm'>Node</p>
                <p className='bg-green-400 py-1 px-3 rounded-sm'>CSS</p>
                <p className='bg-orange-400 py-1 px-3 rounded-sm'>Typescript</p>
              </div>    
          </div>
        

        
          <div className='mt-12 border-2 border-gray-700'>
              <img src="/Static Resume.jpg" alt="Static Resume" /> 

              <div className="flex justify-center text-lg md:text-2xl mt-8">
                  <p>Static Resume</p> <br />
              </div>

              <div className="flex justify-center mt-4">
                  <p>A Typescript based interactive resume built with HTML and CSS, <br />allowing users to showcase their skills dynamically.</p>
              </div>

              <div className='flex items-center justify-center gap-6 my-4'>
                <p className='bg-blue-400 py-1 px-3 rounded-sm'>HTML</p>
                <p className='bg-purple-400 py-1 px-3 rounded-sm'>Node</p>
                <p className='bg-green-400 py-1 px-3 rounded-sm'>CSS</p>
                <p className='bg-orange-400 py-1 px-3 rounded-sm'>Typescript</p>
              </div>                        
          </div>
        </div>

    </div>
  )
}