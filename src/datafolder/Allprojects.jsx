import projectData from "./projectData"
import Projects from "../Pages/Projects"


export default function Allprojects() {



  return (
    <>
    <div className="lg:pl-72 md:py-32 py-10   lg:h-full lg:py-32  z-0">
        <div className="z-0 gap-5 px-8 justify-center lg:flex lg:flex-wrap md:flex md:flex-wrap p-2 sm:flex sm:justify-center  lg:gap-6 md:gap-10 md:justify-center">
          {projectData.map((projectData) => {
           <Projects  key={projectData.id} name={Projects.name} description={projectData.description} Image={projectData.Image}    />
          })}

        </div>
    </div>
    </>
  )
}
