import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {logo,sun} from '../assets'
import {navlinks} from '../constants'
import './Sidebar.css'
const Icon=({styles,name,imgUrl,isActive,disabled,handleClick})=>(
  <div onClick={handleClick} className='sidebarList'>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" />
      
    ): (
      <img src={imgUrl} alt="fund_logo" />
    )}
    <div>{name}</div>
  </div>
)

const Sidebar = () => {
  const navigate=useNavigate()
  const {isActive,SetIsActive}=useState('dashboard')
  return (
    <div className='sidebar'>
      <Link to="/">
        <Icon styles="" imgUrl={logo}/>
      </Link>
      <div>
        <div >
          {navlinks.map((link)=>(
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={()=>{
                if(!link.disabled){
                  SetIsActive(link.name)
                  navigate(link.link)
                }
              }}
            />
          ))}
        </div>
        <Icon imgUrl={sun}/>
      </div>
    </div>
  )
}

export default Sidebar