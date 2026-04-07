import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  /// Early return pattern//
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg '> 
      <ul className='m-2'>
        <li>Home</li>
        <li>Shots</li>
   
      </ul>
      <hr/>
      <h1 className='font-bold'>Subscription</h1>
      <ul className='m-2'>
        <li>Devops</li>
        <li>React</li>
        <li>AI</li>
        <li>UPSC Topper</li>
        <li>Cloud</li>
      </ul>
      <hr/>
      <h1 className='font-bold'>WatchLater</h1>
      <ul className='m-2'>
        <li>History</li>
        <li>Play List</li>
        <li>Liked Vedios</li>
        <li>Downloads</li>
        <li>music</li>
      </ul>
    </div>
  )
}

export default Sidebar