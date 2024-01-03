import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'

function Spotify() {
    return (
        <div className='container'>
            <div className="spotify__body">
                <Sidebar />
                <div className="body p-1">
                    <div className='rounded-lg'>
                        <Navbar />
                        <Body />
                    </div>
                </div>
            </div>
            <div className="spotify__footer">
                <Footer />
            </div>
        </div>
    )
}

export default Spotify
