'use client';


import AvatarDropdown from '../Components/AvatarDropdown';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';




export default function TopNavigation() {
const { username  } = useContext(UserContext);


  return (
    <div>
      <div className="z-50  py-5 px-2 flex items-center gap-5">
        <div className="flex items-center gap-4  lg:gap-8 w-full  lg:py-2   lg:px-20 justify-between">
          <div className="lg:flex md:flex sm:block">
                <h3>
              {username}
                </h3>
          </div>
                <div className="flex md:gap-4 items-center lg:gap-8 gap-5 px-5 ">
               

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                  </svg>
                </div>
                <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>

                </div>
                
                <AvatarDropdown/>
                </div>
        </div>
             
          
      </div>
    </div>
  )
}
