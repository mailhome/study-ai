"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'

import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'



export default function SignInView() {
  
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
            <div className="flex flex-col gap-2 items-center justify-center h-screen w-full">
                <h1 className='font-semibold lg:text-5xl md:text-4xl text-3xl'>Welcome back!</h1>
                <h2 className='lg:text-3xl md:text-2xl text-xl font-semibold'>Let&apos;s simplify your school work</h2>
                <p className='text-neutral-400 text-2xl w-8/12 mx-auto mt-5 '>Sign in to access Studdy. You can use your Apple or Google account.</p>
                <div className='flex flex-col items-center justify-center gap-10 w-6/12 rounded-full mt-10'>
                  <Button 
                  variant="elevated"  
                  onClick={() => onSocial("github")}
                  className='flex items-center justify-center w-full shadow-neutral-400 gap-6 border-neutral-300 bg-white text-black h-16 py-2 px-4'>
                      <FaGithub className='size-6' />
                      <span className='text-2xl font-semibold text-neutral-600 '>Continue with Github</span>
                  </Button>
                  <Button 
                  variant="elevated"   
                  disabled={pending}
                  onClick={() => onSocial("google")}
                  className='flex items-center justify-center w-full shadow-neutral-400 gap-6 border-neutral-300 bg-white text-black h-16 py-2 px-4'>
                      <FcGoogle className='size-6' />
                      <span className='text-2xl font-semibold text-neutral-600'>Continue with Google</span>
                  </Button>
                </div>
                <div className="mt-10 text-left text-neutral-400 text-xl">
                  <span className=''>Dont have an account? <Link href="/sign-up" className='underline underline-offset-4 ml-1'>Sign up</Link></span>
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
