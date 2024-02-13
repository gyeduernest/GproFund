import React from 'react'
import Donationswallet from '../Components/Cards/Donationswallet'
import SavedProjects from '../Components/Cards/SavedProjects'
import TopDonation from '../Components/Cards/TopDonation'
import Firstchart from '../Charts/FirstChart'
import RecentDonations from '../Components/RecentDonations'
import Donationmethods from '../Components/Donationmethods'

export default function Dashboard() {
  return (


<div className='lg:pl-72 md:py-32 py-10   lg:h-full lg:py-32  z-0 '>
      <div className="lg:grid lg:grid-cols-3 lg:gap-16 md:gap-8 md:py-16 md:pl-10 sm:py-20 md:grid md:grid-cols-3  p-5 py-16 px-5   ">

  <div className="sm:mb-10 mb-10 "><Donationswallet/></div>
  <div className="sm:mb-10 mb-10"><SavedProjects/></div>
  <div className="sm:mb-10 mb-10"><TopDonation/></div>
  <div className="mt-10"><Donationmethods/></div>
  <div className="col-span-2 lg:h-80 h-80 "><Firstchart/></div>
  <div className="col-span-2"><RecentDonations/></div>



      </div>
    </div>
  )
}
