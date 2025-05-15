import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from '../components/Ui/MobileNav'

const Website = () => {
    return (
        <div>
            <Outlet />
            <MobileNav />
        </div>
    )
}

export default Website