import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function CallToAction() {
  return (
    <div className='w-full xl:mt-20 '>
      <div className="width-container flex items-center justify-center flex-col h-full w-full">
        <div className="flex items-center justify-center flex-col lg:gap-6 gap-4 my-20">
                <blockquote className='xl:text-5xl text-neutral-800 lg:text-3xl md:text-2xl text-2xl font-medium w-full mx-auto text-center xl:leading-[4rem]'>
                    “This app is amazing, it helps me understand my calculus homework better than when my teacher explains things to me.”
                </blockquote>
                <p className='xl:text-2xl lg:text-lg md:text-md text-md text-neutral-600'>Dilan, 12th Grade, New Jersey</p>
                <div className="flex justify-center items-center relative lg:h-32 lg:w-32 md:h-32 md:w-32 h-24 w-24">
                    <Image 
                    src="/landing-second-quote-avatar.webp" 
                    alt='Image Testimonials' 
                    fill
                    className='absolute rounded-full' />
                </div>
        </div>
        <div className="w-full xl:h-[15rem] lg:h-[12rem] md:h-[8rem] h-[10rem] relative">
            <Image 
            src="/studdy-bottom-banner.svg" 
            alt='Studdy Bottom Banner'
            fill 
            className='absolute' />
        </div>
        <div className="flex items-center justify-center flex-col xl:gap-6 lg:gap-8 md:gap-8  gap-4 mt-20">
              <h1 className='xl:text-6xl text-neutral-800 lg:text-6xl md:text-4xl text-4xl font-medium xl:w-full  mx-auto text-center'>
                  Start understanding anything
              </h1>
              <p className='xl:text-3xl lg:text-3xl md:text-lg text-lg text-center text-neutral-600 xl:w-10/12 '>Get started now for free.</p>
              <Link href="/sign-in" className='mt-6 '>
                <Button variant="elevated" className='text-2xl px-8 text-white bg-amber-400 border border-none shadow-amber-800 h-14 w-auto'>
                    Get Started
                </Button>
            </Link>
            </div>
      </div>
    </div>
  )
}
