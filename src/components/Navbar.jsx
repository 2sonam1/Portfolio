import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='flex justify-center fixed left-0 right-0 mx-auto pt-8 z-50'>
        <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-full shadow-md flex justify-center items-center flex-wrap space-x-10   mt-5 py-2 px-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
          <div className='flex justify-center items-center flex-wrap space-x-8'>
            <a href="#Home" className='hover:rounded-full hover:w-10 hover:h-10 p-1 hover:bg-yellow-500 hover:bg-opacity-10 hover:border hover:border-yellow-500 flex justify-center items-center'><img src="/home-icon.png" className='w-8 h-auto ' /></a>
            <a href="#About" className='hover:rounded-full hover:w-10 hover:h-10 p-1 hover:bg-yellow-500 hover:bg-opacity-10 hover:border hover:border-yellow-500 flex justify-center items-center'><img src="/about-icon.png" className='w-8 h-auto ' /></a>
            <a href="#Projects" className='hover:rounded-full hover:w-10 hover:h-10 p-1 hover:bg-yellow-500 hover:bg-opacity-10 hover:border hover:border-yellow-500 flex justify-center items-center'><img src="/projects-icon.png" className='w-6 h-auto' /></a>
            <a href="#Contact" className='hover:rounded-full hover:w-10 hover:h-10 p-1 hover:bg-yellow-500 hover:bg-opacity-10 hover:border hover:border-yellow-500 flex justify-center items-center'><img src="/contact-icon.png" className='w-6 h-auto ' /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
