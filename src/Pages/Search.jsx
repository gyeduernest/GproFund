'use client';

import { Badge} from "flowbite-react";
import ProgressBar from "../Components/Progress";
import Bookmarks from "../Components/Bookmarks";
import { Link } from "react-router-dom";
import projectData from "../datafolder/projectData";



// ... (previous imports)

export default function Search() {
  return (
    <div className="lg:pl-72 md:py-48 py-10 lg:h-full lg:py-32 z-0">
      
      <div className='z-0 gap-5 px-8 justify-center lg:flex lg:flex-wrap md:flex md:flex-wrap p-2 sm:flex sm:flex-wrap lg:gap-6 md:gap-10 md:justify-center'>
        {projectData.map((projectData) => (
          <div className="border rounded-md shadow-sm hover:shadow-lg mb-10 w-80 lg:w-72 lg:h-[450px] h-[500px] md:w-64">
            <div className="h-1/2">
              <img src={projectData.Image} alt="" className="rounded-t-lg" />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between">
                <h3>{projectData.name}</h3>
                <Badge>{projectData.category}</Badge>
              </div>
              <p>{projectData.description}</p>
              <div className="mt-5">
                <div className="flex justify-between">
                  <p>{projectData.ProgressValue}</p>
                  <p>{projectData.Percentage}</p>
                </div>
                <ProgressBar />
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

