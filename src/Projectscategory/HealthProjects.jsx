'use client';

import { Badge} from "flowbite-react";
import Bookmarks from "../Components/Bookmarks";
import { Link } from "react-router-dom";
import projectData from "../datafolder/projectData";
import Educationbadge from "../BadgeComponents/Educationbadge";
import Agriculturbadge from "../BadgeComponents/Agriculturebadge";
import Financebadge from "../BadgeComponents/Financebadge";
import Sportsbadge from "../BadgeComponents/Sportsbadge";
import Tourismbadge from "../BadgeComponents/Tourismbadge";
import Allprojectsbadge from "../BadgeComponents/Allprojectsbadge";
import Healthbadge from "../BadgeComponents/Healthbadge"

// ... (previous imports)

export default function HealthProjects() {

  const healthProjects = projectData.filter((project) => project.category === 'Health');







  return (
    <div className="lg:pl-72 md:py-24  py-10 lg:h-full lg:py-32 z-0">
      <div className="flex lg:gap-10 mb-10 justify-center md:gap-10 gap-1 w-full py-5">
      <Allprojectsbadge/>
        <Agriculturbadge/>
        <Educationbadge/>
        <Financebadge/>
        <Healthbadge/>
        <Sportsbadge/>
        <Tourismbadge/>
        
      </div>
      <div className='z-0 gap-5 px-8 justify-center lg:flex lg:flex-wrap md:flex md:flex-wrap p-2 sm:flex sm:flex-wrap lg:gap-6 md:gap-10 md:justify-center '>
        {healthProjects.map((projectData) => (
          <div className="border rounded-md shadow-sm hover:shadow-lg mb-10 w-80 lg:w-72 lg:h-[450px] h-[450px] md:w-64    "    key={projectData.id}  >
            <div className="">
              <img src={projectData.Image} alt="" className="rounded-t-lg" />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between">
                <h3>{projectData.name}</h3>
                <Badge>{projectData.category}</Badge>
              </div>
              <p>{projectData.description}</p>
              <div className="mt-5">


                <div className="flex w-full items-center">
                  
                  <div className="w-full">
                  <p className="text-xs font-semibold">
                {projectData.ProgressValue}%
                </p>
               </div>
               <div>
                    <p className="text-xs font-semibold">Needed</p>
                    <p className="text-xs font-semibold">{projectData.AmountNeeded}</p>
                </div>
                </div>
                <input type="range" min="0" max="100" className="w-full" value={projectData.ProgressValue} />
              </div>
              <div className="flex justify-between items-center mt-5">
                <Bookmarks />
                <Link to="/" className="px-2 py-2 bg-teal-500 text-white font-semibold rounded-lg flex">
                  Donate
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

