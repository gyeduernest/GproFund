'use client';

import { Avatar, Dropdown } from 'flowbite-react';
import Swap from './Toggle';

export default function AvatarDropdown() {
  return (
    <Dropdown className='w-64 px-5'
      label={<Avatar alt="User settings" img=""  rounded />}
      arrowIcon={false}
      inline
    > 
      <Dropdown.Header>
        <span className="block text-sm">Username</span>
        <span className="block truncate text-sm font-medium">email@email.com</span>
      </Dropdown.Header>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <div className='px-3 mt-5 block sm:block md:block lg:hidden'>
      <Swap/>
      </div>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
