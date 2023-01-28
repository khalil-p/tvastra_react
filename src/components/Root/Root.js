import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />

        </>
    )
}

export default Root