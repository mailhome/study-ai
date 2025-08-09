import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'


const items = [
  {
    label: "Overview",
    href: "/overview",
  },
  {
    label: "Parents",
    href: "/parents",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Policy",
    href: "/policy",
  },
  {
    label: "Terms",
    href: "/terms-of-service",
  },

]

const icons = [
  {
    icon: FaTwitter,
    href: "https://x.com/studdy_ai"
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/studdy_ai"
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/studdy_ai"
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@studdy_ai"
  },
  {
    icon: FaDiscord,
    href: "https://discord.com/invite/Uw2wXEWN"
  },

]
export default function Footer() {
  return (
    <div className='w-full bg-transparent py-10 xl:mt-20 mt-10 width-container'>
      <div className="flex md:flex-row flex-col gap-8 items-center justify-between">
        <div className="flex items-center flex-row justify-center lg:gap-10 gap-10">
          {items.map((item) => (
            <Link 
            key={item.href} 
            href={item.href}
            className='text-neutral-700 xl:text-xl lg:text-xl md:text-lg text-md'>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center md:gap-10 gap-12 ">
          {icons.map(({ icon: Icon, href }) => (
            <Link 
            key={href}
            passHref
            href={href}>
              <Icon className='size-6'  />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}