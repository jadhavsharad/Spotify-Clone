import React from 'react'
import { MdHomeFilled, MdSearch, MdAdd, MdArrowForward } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import logo from '../assets/logo.png';
import {Tooltip} from "@nextui-org/tooltip";

export default function Sidebar() {
  return (
    <div className='sidebar bg-black p-1.5 lg:flex flex-col gap-2.5 overflow-x-hidden hidden'>

      <div className="bg-[#151515] rounded-lg flex flex-col p-2">

        <div className="logo px-2 w-1/3 py-2">
          <img src={logo} alt="spotify" className='' />
        </div>

        <div className='sidebar-links'>
          <nav>
            <ul>
              <li className='text-white flex items-center text-[1.7vi] gap-2.5 px-2 rounded-lg hover:cursor-pointer hover:bg-[#212121] duration-200'><MdHomeFilled /><a href="">Home</a></li>
              <li className='text-white flex items-center text-[1.7vi] gap-2.5 px-2 rounded-lg hover:cursor-pointer hover:bg-[#212121] duration-200'><MdSearch /><a href="">Search</a></li>
            </ul>
          </nav>
        </div>
      </div>


      <div className='bg-[#151515] rounded-lg py-4 p-2 sidebar-links h-full'>
        <nav>
          <ul className='flex justify-between items-center'>
            <li className='text-white flex items-center text-[1.7vi] gap-2.5 px-2 rounded-lg hover:cursor-pointer hover:bg-[#212121] duration-200 w-full'><IoLibrary /><a href="">Library</a></li>
            <ul className='flex'>
            <Tooltip closeDelay={250} color='success' content='Create Playlist'><li className='p-2.5 hover:bg-[#212121] rounded-full cursor-pointer'><MdAdd /> </li></Tooltip>
            <Tooltip closeDelay={250} color='success' content='Show More'><li className='p-2.5 hover:bg-[#212121] rounded-full cursor-pointer'><MdArrowForward /> </li></Tooltip>
            
            </ul>
          </ul>
        </nav>
        <div className='flex flex-col gap-4 px-4 bg-[#242424] py-8 rounded-lg my-2'>
          <h1 className='text-sm text-white font-semibold'>Create Your First Playlist</h1>
          <h3 className='text-white text-xs'>It's easy, we'll help you</h3>
          <button className='text-black bg-white px-4 py-2 rounded-full text-xs font-semibold w-fit hover:scale-105 duration-200'>Create Playlist</button>
        </div>

        <div className='flex flex-col gap-4 px-4 bg-[#242424] py-8 rounded-lg my-2'>
          <h1 className='text-sm text-white font-semibold'>Let's find some podcasts to follow</h1>
          <h3 className='text-white text-xs'>We'll keep you updated on new episodes</h3>
          <button className='text-black bg-white px-4 py-2 rounded-full text-xs font-semibold w-fit hover:scale-105 duration-200'>Browse Podcasts</button>
        </div>
      </div>
    </div>
  )
}
