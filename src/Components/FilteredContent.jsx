
'use client';

import {  Button, Checkbox, } from 'flowbite-react';
import ProfileCard from './Profile';



export default function FilteredContent() {


  
  return (
    
    <>

    <div className='flex px-5 justify-center lg:pl-72 md:py-32 py-20   lg:h-full lg:py-32  z-0 '>
      <div className=''>
          <ProfileCard/>
        <div className=' grid grid-cols-2'>
            <div className='flex mb-5 px-5'>
              <label htmlFor="Energy">
                Energy
                <Checkbox id="Energy" />
              </label>                        
            </div>
            <div className='flex  mb-5 px-5'>
              <label htmlFor="Education">
              Education
                <Checkbox id="Education" />
              </label>                        
            </div>
            <div className='flex  mb-5 px-5'>
              <label htmlFor="Health">
                Health
                <Checkbox id="Health" />
              </label>                        
            </div>

        </div>

            
      <div className="max-w- mt-5 w-full px-5">
          <Button className='w-full'>Update</Button>
      </div>
      </div>
    </div>
    </>
  );
}
