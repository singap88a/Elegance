import Enough from '@/app/components/about/Enough'
import Bannar from '@/app/components/ourWork/Bannar'
import Work from '@/app/components/ourWork/Work'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* <Bannar/> */}
      <Work/>
      <Enough/>
    </div>
  )
}
