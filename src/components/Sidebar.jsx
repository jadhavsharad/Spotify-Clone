import React from 'react'
import { MdHomeFilled, MdSearch, MdAdd, MdArrowForward } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import logo from '../assets/logo.png';
import { Tooltip } from "@nextui-org/tooltip";

export default function Sidebar() {
  return (
    <div>
      <div className='px-3'>
        <div className="logo px-2 w-1/3 py-2">
          <img src={logo} alt="spotify" className='' />
        </div>

        <div className='sidebar-links'>
          <nav>
            <ul>
              <li className='text-white flex items-center text-[1.5vi] font-bold gap-2.5 px-2 py-2 rounded-lg hover:cursor-pointer hover:bg-[#212121] duration-200'><MdHomeFilled /><a href="" className='text-small'>Home</a></li>
              <li className='text-white flex items-center text-[1.5vi] font-bold gap-2.5 px-2 py-2 rounded-lg hover:cursor-pointer hover:bg-[#212121] duration-200'><MdSearch /><a href="" className='text-small'>Search</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='px-3'>
        <nav>
          <ul className='flex justify-between items-center'>
            <li className='text-white flex items-center text-[1.5vi] w-full font-bold gap-2.5 px-2 py-2 rounded-lg hover:cursor-pointer hover:bg-[#212121] duration-200'><IoLibrary /><a href="" className='text-small'>Library</a></li>
            <ul className='flex'>
              <Tooltip closeDelay={250} color='success' content='Create Playlist'><li className='p-2.5 hover:bg-[#252525] text-white rounded-full cursor-pointer'><MdAdd /> </li></Tooltip>
              <Tooltip closeDelay={250} color='success' content='Show More'><li className='p-2.5 hover:bg-[#252525] text-white rounded-full cursor-pointer'><MdArrowForward /> </li></Tooltip>

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
