import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Home,Profile,CreateCampaign,CampaignDetail} from './pages/index'
import {Navbar, Sidebar} from './components/index'


const App = () => {
  return (
    <div>
      <div style={{display: 'flex'}}>
        <Sidebar />
        <Navbar/>
      </div>
      <div>
        
        <Routes>
          <Route path="/" element={<Home/>} / >
          <Route path="/profile" element={<Profile/>} / >
          <Route path="/createcampaign" element={<CreateCampaign/>} / >
          <Route path="/campaigndetail" element={<CampaignDetail/>} / >
        </Routes>
      </div>
    </div>
  )
}

export default App
