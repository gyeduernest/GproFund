
'use client';

import {  Button, Checkbox, } from 'flowbite-react';
import ProfileCard from './Profile';
import { Link } from 'react-router-dom';



export default function Notifications() {
  return (
    
    <>

    <div className='flex  justify-center lg:pl-72 md:py-32 py-20   lg:h-full lg:py-32  z-0 '>
      <div className=''>
          <ProfileCard/>
      <div className='flex justify-between px-5 mb-5'>
          <p className='text-sm font-semibold'>
            Push Notifications
          </p>
          <Checkbox id="Push Notifications" />
      </div>

      <Link  to="/FilteredContent" >
      <div className='flex justify-between px-5'>
          <p className='text-sm font-semibold'>
            Filtered Content
          </p>
          <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>

          </div>
      </div>
      </Link>
            
      <div className="max-w- mt-5 w-full px-5">
          <Button className='w-full'>Update</Button>
      </div>
      </div>
    </div>
    </>
  );
}
