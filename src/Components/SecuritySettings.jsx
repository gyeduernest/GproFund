
'use client';

import {  Button } from 'flowbite-react';
import ProfileCard from './Profile';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';



export default function SecuritySettings() {

const {password} = useContext(UserContext)
  
  return (
    
    <>

    <div className='flex px-5 justify-center lg:pl-72 md:py-32 py-20   lg:h-full lg:py-32  z-0 '>
      <div className=''>
          <ProfileCard/>
          <div className="max-w- px-5">
        <div className="mb-2 block">
          <Label htmlFor="Password" value="Password" />
        </div>
        <TextInput id="Password" type='password'  value={password} addon="👁" required />
      </div>

            
      <div className="max-w- mt-5 w-full px-5">
          <Button className='w-full'>Update</Button>
      </div>
      </div>
    </div>
    </>
  );
}
