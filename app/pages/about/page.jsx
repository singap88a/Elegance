import Banner from '@/app/components/about/Banner'
import Enough from '@/app/components/about/Enough'
import AboutHero from '@/app/components/about/Hero'
import Testimonials from '@/app/components/about/Testimonials'
import React from 'react'
 
export default function page() {
  return (
    <div>
      <AboutHero/>
      <Banner/>
      <Testimonials />
      <Enough/>
    </div>
  )
}
