import React from 'react'
import Hero from './hero'
import Testimonials from './testimonials'
import CallToAction from './call-to-action'
import NavbarHero from './navbar-hero'

export default function IndexPage() {
  return (
    <main className='h-full w-full'>
      <NavbarHero />
      <Hero />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
