
'use client';

import { Button, Dropdown } from 'flowbite-react';
import Profilepic from "../assets/Profilepic.jpg"
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';

export default function ProfileCard() {
  const {username} = useContext(UserContext);


  return (
    <div className="lg:w-96  p-5 rounded-md ">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Export Data
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center">
        <img src={Profilepic} alt="" className='rounded-full' />
        <Button size="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
       </Button>
        <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{username}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">Occupation</span>
        <div className="mt-4 flex space-x-3 lg:mt-6 text-xs text-center ">
        Identify as @HypercitiNews. I hate violence if i hurt you i am sorry. Development Planner, digital marketing enthusiast , project management and policy reviews.
        </div>
      </div>
    </div>
  );
}
