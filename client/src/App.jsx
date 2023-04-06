import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Home,Profile,CreateCampaign,CampaignDetail} from './pages/index'
import {Navbar, Sidebar} from './components/index'


const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#8D3DAF] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/createcampaign" element={<CreateCampaign/>} />
          <Route path="/campaigndetail" element={<CampaignDetail/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
