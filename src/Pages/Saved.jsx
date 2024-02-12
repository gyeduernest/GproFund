'use client';

import { Badge} from "flowbite-react";
import ProgressBar from "../Components/Progress";
import Bookmarks from "../Components/Bookmarks";
import { Link } from "react-router-dom";
import Abandoned from "../assets/Projectpics/Abandoned.jpg"



export default function Saved() {
      const allProjects = [
        {id:1,
        Project_name:"Savenlugu",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eaque natus aperiam iste quod itaque iusto.",
      ProgressValue: 54,
      Percentage:54}
      ]







  return (
    <div  className="lg:pl-72 md:py-32 py-10   lg:h-full lg:py-32  z-0 ">
          
    <div className='z-0  gap-5 px-8 justify-center lg:flex lg:flex-wrap md:flex md:flex-wrap p-2 sm:flex sm:justify-center  lg:gap-6 md:gap-10 md:justify-center'>
        <div className=" border rounded-md  shadow-sm hover:shadow-lg mb-10 w-80 lg:w-72 lg:h-[450px]  md:w-64">
          <div className="h-1/2">
            <img src={Abandoned} alt="" className="rounded-t-lg

" />
          </div>
          <div className="p-2">
            <div className="flex items-center justify-between">
            <h3>
              Project Name
            </h3>
            <Badge> Education </Badge>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eaque natus aperiam iste quod itaque iusto.
            </p>
           <div className="mt-5">
            <div className="flex justify-between">
              <p>
                  50,00, <span>Raised</span>
              </p>
              <p>
                % 45
              </p>
            </div>
           <ProgressBar/>
           </div>

           <div className="flex justify-between items-center mt-5">
            <Bookmarks/>
            <Link  className="px-2 py-2 bg-teal-500 text-white font-semibold rounded-lg flex" >
              Donate</Link>
           </div>

           

          </div>


        </div>
        
       
        
                
        

    </div>
    </div>
  )
}
