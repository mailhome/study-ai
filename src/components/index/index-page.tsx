import React from 'react'
import Hero from './hero'
import Testimonials from './testimonials'
import CallToAction from './call-to-action'

export default function IndexPage() {
  return (
    <main className='h-full w-full'>
      <Hero />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
