"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'

import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'



export default function SignUpView() {
   
    const [pending, setPending] = useState(false);
    const router = useRouter();
  
    const onSocial = (provider: "github" | "google") => {
      
      setPending(true);
  
      authClient.signIn.social({
        provider: provider
      },
    
      {
        onSuccess: () => {
          setPending(false);
          router.push("/solver");
        }, 
        onError: () => {
          setPending(true)
        }
      },
  
  
      )
    }

  return (
    <div className='flex items-center justify-center gap-2 h-screen'>
      <div className="sm:container px-4 mx-auto">
        <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col gap-4 items-center justify-center h-screen w-full">
                <h1 className='font-semibold lg:text-5xl md:text-4xl text-3xl w-8/12 ml-10'>Simplify learning, Ace everything!</h1>
                <p className='text-neutral-400 text-2xl mt-5 w-8/12 ml-10 '>Sign up to access Studdy. You can use your Apple or Google account.</p>
                <div className='flex flex-col items-center justify-center gap-10 w-6/12 mx-auto rounded-full mt-10'>
                  <Button 
                  onClick={() => onSocial("github")} 
                  disabled={pending}
                  variant="elevated"  className='flex items-center justify-center w-full shadow-neutral-400 gap-6 border-neutral-300 bg-white text-black h-16 py-2 px-4'>
                      <FaGithub className='size-6' />
                      <span className='text-2xl font-semibold text-neutral-600 '>Continue with Github</span>
                  </Button>
                  <Button 
                   onClick={() => onSocial("google")} 
                   variant="elevated" 
                   disabled={pending}
                   className='flex items-center justify-center w-full shadow-neutral-400 gap-6 border-neutral-300 bg-white text-black h-16 py-2 px-4'>
                      <FcGoogle className='size-6' />
                      <span className='text-2xl font-semibold text-neutral-600'>Continue with Google</span>
                  </Button>
                </div>
                <div className="mt-10 text-left text-neutral-400 text-xl">
                  <span className=''>Already have an account? <Link href="/sign-in" className='underline underline-offset-4 ml-1'>Login</Link></span>
                </div>
            </div>
            <div className="w-11/12 relative h-screen hidden md:flex items-center justify-start">
                <Image 
                src="/studdy-on-shapes.svg" 
                alt='Shapes Hero'
                fill 
                className='absolute' />
            </div>
        </div>
      </div>
    </div>
  )
}
