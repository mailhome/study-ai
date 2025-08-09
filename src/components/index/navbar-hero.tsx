"use client"

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import useScrollTop from '@/hooks/use-scroll-top'

const navLinks = [
    {
        label: "Overview",
        href: "/overview",
    },

    {
        label: "For Parents",
        href: "/parents"
    },

    {
        label: "Sign In",
        href: "/sign-in"
    }
]

export default function NavbarHero() {
  const [menu, setMenu] = useState(false)
  const scrolled = useScrollTop();

  return (
    <header className={cn('w-full bg-white shadow-sm z-50 block', scrolled && "hidden")}>
      <nav className='sticky width-container'>
        <div className="flex items-center justify-between w-full xl:-my-10 lg:-my-4 md:-my-4 -my-6">

            {/* Logo Here */}
            <div className="relative xl:h-48 xl:w-48 lg:h-36 lg:w-36 md:w-28 md:h-28 h-32 w-32">
                <Image 
                src="/logo-studyai.svg" 
                alt='Logo' 
                fill 
                className='absolute' />
            </div>

            <div className="hidden md:block">
                <NavLinksItem />
            </div>

            <div className="flex items-center justify-center gap-10">
             <Link href="/sign-in">
                <Button variant="elevated" className='text-xl px-6 text-white bg-amber-400 border border-none shadow-amber-800 h-10'>
                    Get Started
                </Button>
            </Link>
            <Sheet open={menu} onOpenChange={setMenu}>
              <SheetTrigger 
              className="md:hidden cursor-pointer">
                  <Menu className='size-8' />
              </SheetTrigger>
              <SheetContent className='w-full'>
                <div className="flex items-center justify-center flex-col gap-10 h-full w-full">
                  {navLinks.map((item) => (
                <Link 
                key={item.href} 
                href={item.href}
                className={cn("text-2xl text-neutral-800 pl-4 hover:bg-neutral-200 w-full text-center py-4", item.href === "/sign-in" && "hidden")}>
                {item.label}
                </Link>
                ))}
                <Link href="/sign-in">
                   <Button variant="elevated" className='text-2xl px-8 text-white bg-amber-400 border border-none shadow-amber-800 h-14'>
                      Get Started
                   </Button>
                </Link>
                </div>
              </SheetContent>
            </Sheet>
            </div>
        </div>
      </nav>
    </header>
  )
}



const NavLinksItem = () => {
  return (
    <div className='flex items-center justify-center lg:gap-8 md:gap-8'>
      {navLinks.map((item) => (
        <Link 
        key={item.href} 
        href={item.href}
        className='xl:text-xl lg:text-base text-neutral-800'>
            {item.href === "/sign-in" ? (
                <div className="flex items-center justify-center gap-2 ">
                    <div className="animate-spin lg:h-5 lg:w-5 h-3 w-3 border-dashed rounded-full border-neutral-500 border-1 " />
                    {item.label}
                </div>
            ) : (
                <div className="">
                    {item.label}
                </div>
            )}
        </Link>
      ))}
    </div>
  )
}

