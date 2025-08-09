"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import StarRating from './star-rating';


export default function Testimonials () {
  return (
    <div className='w-full h-auto 2xl:mt-28 xl:mt-20 lg:mt-16 mt-20 width-container'>
      <div className="flex items-center justify-center flex-col lg:gap-6 gap-4">
        <blockquote className='xl:text-5xl text-neutral-800 lg:text-3xl md:text-2xl text-2xl font-medium w-full mx-auto text-center xl:leading-[4rem]'>
            “I love this app. I use it everyday for my homework every time when I&apos;m struggling.”
        </blockquote>
        <p className='xl:text-2xl lg:text-lg md:text-md text-md text-neutral-600'>Janelle, First-Year College Student, NC</p>
        <div className="flex justify-center items-center relative lg:h-32 lg:w-32 md:h-32 md:w-32 h-24 w-24">
            <Image 
            src="/testimonials.jpg" 
            alt='Image Testimonials' 
            fill
            className='absolute rounded-full' />
        </div>
      </div>

      <div className="flex xl:mt-20 mt-20 items-center justify-center flex-col gap-6">
        <h1 className='xl:text-6xl text-neutral-800 lg:text-4xl md:text-4xl text-3xl font-bold xl:w-8/12 w-full mx-auto text-center'>
            10+ million problems explained
        </h1>
        <div className="flex items-center justify-center text-neutral-800">
          <div className="flex flex-col items-center justify-center gap-1 xl:pr-8 lg:pr-6 pr-8 border-r-2">
            <p className="xl:text-6xl lg:text-4xl md:text-4xl text-4xl font-bold">
              4.8
            </p>
            <p className='xl:text-2xl text-xl'>Rating</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 xl:pl-8 lg:pl-6 pl-4">
            <div className="xl:text-6xl lg:text-4xl md:text-3xl text-4xl font-semibold">
              500K+
            </div>
            <p className='xl:text-2xl lg:text-2xl md:text-lg text-xl text-center'>Downloads</p>
          </div>
        </div>
        <MoreTestimonials />
        </div>
      </div>
  )
}


const testimonialsItem = [
  {
    label: "Weirdo Art, 12/15/2024",
    heading: "Best AI app ever",
    testimony: "I don’t usually write reviews but I had to do it for this app. Studdy is such a good app to help me with homework. Social Studies is the hardest, but with this app it makes it easier. 100% recommend this app if you ever need help."
  },
  {
    label: "Alexandria Art, 12/15/2024",
    heading: "Amazing because wow!!",
    testimony: "I love it so much. It helped me with my ADHD and I didn’t need to cheat anymore. This really helped me understand my homework and stuff because I hate homework but my teacher told me I have to do it but this app helped me so much. I love this app!"
  },
  {
    label: "Shelly808s, 11/22/2024",
    heading: "This saved my life",
    testimony: "I love this app so much it’s so helpful and helps me actually understand math 😳 studdy I am your biggest fan thank you for helping me in my math class bro"
  },
  {
    label: "charlie24681012, 09/11/2023",
    heading: "amazing get IT RN!",
    testimony: "My grades were 4 Fs and 1 D now thanks to Studdy my grades are all A+ it doesn’t just flat out give me the answer first it explains it to you then gives you the answer. It’s helping me a lot. If you struggle with any subject, you should definitely get this app. It helps a lot now"
  },
  {
    label: "Charhatesmath, 10/30/2023",
    heading: "5/5 🤩",
    testimony: "it’s low key really good. i’m in 8th grade and am currently struggling in math and science but this app not only gives you the answers, but it gives you the option to have a self tutor to help you understand it better."
  },
  {
    label: "Silver, 10/29/2023",
    heading: "The perfect teaching app",
    testimony: "I love it so much. It helped me with my ADHD and I didn’t need to cheat anymore. This really helped me understand my homework and stuff because I hate homework but my teacher told me I have to do it but this app helped me so much. I love this app!"
  },
  
  {
    label: "Shel830s, 11/22/2024",
    heading: "AMAZING!",
    testimony: "My grades were 4 Fs and 1 D now thanks to Studdy my grades are all A+ it doesn’t just flat out give me the answer first it explains it to you then gives you the answer. It’s helping me a lot. If you struggle with any subject, you should definitely get this app. It helps a lot now."
  },

   {
    label: "Alexandria Art, 12/15/2024",
    heading: "Amazing because wow!!",
    testimony: "I love it so much. It helped me with my ADHD and I didn’t need to cheat anymore. This really helped me understand my homework and stuff because I hate homework but my teacher told me I have to do it but this app helped me so much. I love this app!"
  },

]

const MoreTestimonials = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const [ isPaused, setIsPaused ] = useState(false);
  const speed = 0.8;

  useEffect(() => {
    if (containerRef.current) {
      const firstSetWidth = containerRef.current.scrollWidth / 2;
      setTotalWidth(firstSetWidth);
    }
  }, [])

  useAnimationFrame(() => {
    if (!isPaused && totalWidth > 0) {
      let newX = x.get() - speed;
      if (newX <= -totalWidth) {
        newX=0;
      }
      x.set(newX);
    }
  })

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);
  return (
    <div 
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
    className="w-full overflow-hidden bg-white mt-10">
      <motion.div 
      style={{ x }}
      ref={containerRef}
      className='w-max flex gap-10 active:cursor-grabbing'>
        {testimonialsItem.map((item, i) => (
          <div 
          key={i} 
          className="py-10 px-10 rounded-lg flex items-start justify-start bg-neutral-200/50 flex-col gap-6 w-[400px] h-[400px]">
            <StarRating rating={4.5} />
            <p className='text-muted-foreground text-xl font-semibold'>{item.heading}</p>
            <div className="flex flex-col items-start justify-start gap-1">
              <h1 className='text-lg font-medium'>{item.label}</h1>
              <p className='text-base'>{item.testimony}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
