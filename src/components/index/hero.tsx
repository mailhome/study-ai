import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='width-container h-full xl:mt-20 lg:mt-10'>
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full w-full">
        <div className="flex lg:items-start items-center  flex-col  h-full py-20 lg:justify-start justify-center xl:gap-8 lg:gap-8 md:gap-6 gap-4 xl:ml-10 lg:ml-5">
            <h1 className='2xl:text-8xl xl:text-7xl lg:text-6xl xl:leading-[5rem] md:text-7xl text-6xl text-center lg:text-left font-medium text-neutral-800'>
                Anyone can <br /> learn anything
            </h1>
            <p className='xl:text-3xl lg:text-2xl md:text-2xl text-2xl text-muted-foreground'>
                Studdy helps you learn anything
            </p>
            <Link href="/sign-in" className='mt-6 '>
                <Button variant="elevated" className='text-2xl px-8 text-white bg-amber-400 border border-none shadow-amber-800 h-14 w-auto'>
                    Get Started
                </Button>
                </Link>
        </div>
        <div className="relative lg:w-full xl:h-[500px] lg:h-[400px] md:h-[500px] md:w-10/12 h-[350px] w-[500px] xl:justify-start justify-center items-center flex md:ml-20  xl:-ml-5 ml-10 lg:-ml-10 ">
            <Image 
            src="/hero.png" 
            alt="Hero Image" 
            fill 
            className='absolute' />
        </div>
      </div>
    </div>
  )
}
