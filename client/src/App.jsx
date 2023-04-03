import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Home,Profile,CreateCampaign,CampaignDetail} from './pages/index'
import {Navbar, Sidebar} from './components/index'


const App = () => {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Navbar/>
        <Home/>
        
        {/* <Routes> */}
          {/* <Route path="/" element={<Home/>} / > */}

        {/* </Routes> */}
      </div>
    </div>
  )
}

export default App
