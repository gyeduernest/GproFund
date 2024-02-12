
'use client';

import { Datepicker, Button,  Label, TextInput, Textarea } from 'flowbite-react';
import ProfileCard from './Profile';


export default function EditProfile() {
  return (
    
    <>

    <div className='flex px-5  justify-center lg:pl-72 md:py-32 py-20   lg:h-full lg:py-32  z-0 '>
      <div className=''>
          <ProfileCard/>
      <div className="max-w-">
        <div className="mb-2 block">
          <Label htmlFor="username3" value="Username" />
        </div>
        <TextInput id="username3" placeholder="Bonnie Green" addon="@" required />
      </div>
      <div className="max-w- z-0">
        <div className="mb-2 block">
          <Label htmlFor="date of birth" value="Date of birth" />
        </div>
        <Datepicker minDate={new Date(1900, 0, 1)} maxDate={new Date(2006, 3, 30)}   id='date of birth' className='z-0'  />
      </div>
      <div className="max-w-">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea id="comment" placeholder="update your bio..." required rows={4} />
    </div>
      <div className="max-w- mt-5 w-full">
          <Button className='w-full'>Update</Button>
      </div>
      </div>
    </div>
    </>
  );
}
