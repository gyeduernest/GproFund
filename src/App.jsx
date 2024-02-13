'use client';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileNavigation from "./Menucomps/MobileNavigation";
import SideNavigation from "./Menucomps/SideNavigation";
import TopNavigation from "./Menucomps/TopNavigation";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";
import Projects from "./Pages/Projects";
import Saved from "./Pages/Saved";
import Settings from "./Pages/Settings";
import EditProfile from "./Components/EditProfile";
import Notifications from "./Components/Notifications";
import FilteredContent from "./Components/FilteredContent";
import SecuritySettings from "./Components/SecuritySettings";
import { UserProvider } from "./Context/UserContext";
import Login from "./Pages/Login";
import EducationProjects from "./Projectscategory/EducationProjects";
import AgricProjects from "./Projectscategory/AgricProjects";
import FinanceProjects from "./Projectscategory/FinanceProjects";
import HealthProjects from "./Projectscategory/HealthProjects"
import SportsProjects from "./Projectscategory/SportsProjects"
import TourismProjects from "./Projectscategory/TourismProjects"


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
    <>

    <div className="">
      <div className="fixed w-full z-50 bg-slate-50 md:px-10 lg:px-5">
      <TopNavigation/>
      </div>
      <SideNavigation/>
      <MobileNavigation/>

      <Routes>
              <Route path="/" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/saved" element={<Saved/>} />
              <Route path="/settings" element={<Settings/>} />
              <Route path="/editprofile" element={<EditProfile/>}/>          
              <Route path="/notifications" element={<Notifications/>}/> 
              <Route path="/FilteredContent" element={<FilteredContent/>}/>         
              <Route path="/securitysettings" element={<SecuritySettings/>}/>         
              <Route path="/educationprojects" element={<EducationProjects/>}/>         
              <Route path="/agricprojects" element={<AgricProjects/>}/>         
              <Route path="/financeprojects" element={<FinanceProjects/>}/>         
              <Route path="/healthprojects" element={<HealthProjects/>}/>         
              <Route path="/sportsprojects" element={<SportsProjects/>}/>         
              <Route path="/tourismprojects" element={<TourismProjects/>}/>         
                      
      </Routes>
    </div>
    </>
      </BrowserRouter>
      </UserProvider>
  )
}

export default App
