import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Albums from './Albums'
import Player from './Player'


export default function Spotify() {
    return (
        <div className='spotify__container'>

            <div className="spotify__body bg-black ">
                <div className="spotify__sidebar hidden h-full lg:block pt-2 pl-2 pb-2 pr-1">
                    <div className=' bg-[#181818] h-full rounded-lg'>
                        <Sidebar />
                    </div>
                </div>


                <div className='pt-2 pr-2 pb-2 pl-2 lg:pl-1 overflow-scroll'>
                    <div className="spotify__content overflow-hidden rounded-lg bg-gradient-to-t h-full from-[#000] to-slate-900 bg-opacity-20 p-2">
                        <div className="spotify__navbar">
                            <Navbar />
                        </div>

                        <div className="spotify__albums overflow-auto">
                            <Albums />
                        </div>
                    </div>
                </div>
            </div>


            <div className="spotify__player bg-[#181818] fixed bottom-0 w-full h-[15vh]">
                <Player />
            </div>
        </div>
    )
}
