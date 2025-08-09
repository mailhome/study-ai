"use client"

import React, { useEffect, useState } from 'react'

export default function EasyLearning() {
  return (
    <div className='w-full width-container h-auto 2xl:mt-28 xl:mt-20 lg:mt-16 mt-20 '>
      <div className="flex items-center justify-center flex-col lg:gap-6 gap-4">
              <h1 className='xl:text-6xl text-neutral-800 lg:text-5xl md:text-4xl text-4xl font-medium xl:w-8/12 w-10/12 mx-auto text-center'>
                  We make learning easy
              </h1>
              <p className='xl:text-3xl lg:text-xl md:text-lg text-lg text-center text-neutral-600 xl:w-10/12 '>Solve and understand the toughest problems in minutes. Ask questions when stuck and get personalized help.</p>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <ParallaxSection />
            </div>
    </div>
  )
}

const ParallaxSection = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        
        window.addEventListener("scroll", handleScroll );
        return () => window.removeEventListener("scroll", handleScroll);
        
    }, [])

    return (
        <div className="relative hidden  h-[100vh] bg-neutral-200/50 overflow-hidden">
            <div 
            className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
            style={{ 
                backgroundImage: "url('/sky.png')",
                transform: `translateY(${offset + 0.2}px)`
            }} />
            <div 
            className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
            style={{ 
                backgroundImage: "url('/sky.png')",
                transform: `translateY(${offset + 0.4}px)`
            }} />
            <div 
            className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
            style={{ 
                backgroundImage: "url('/sky.png')",
                transform: `translateY(${offset + 0.6}px)`
            }} />
            <div 
            className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
            style={{ 
                backgroundImage: "url('/sky.png')",
                transform: `translateY(${offset + 0.9}px)`
            }} />
        </div>
    )
}
