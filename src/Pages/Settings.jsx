import React from 'react'
import ProfileCard from '../Components/Profile'
import MoreSettings from '../Components/MoreSettings'

export default function Settings() {
  return (
    <div className='flex px-5 justify-center lg:pl-72 md:py-32 py-20   lg:h-full lg:py-32  z-0 '>
          <div>
        <ProfileCard/>
        <MoreSettings/>   
        <p className='p-8'>What is GproFund? <span>Click here to learn more</span></p>  
          </div>

    </div>
  )
}
