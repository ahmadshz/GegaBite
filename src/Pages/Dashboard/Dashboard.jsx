import React, { useState } from 'react'
import TopBar from '../../components/Dashboard/TopBar'
import SideBar from '../../components/Dashboard/SideBar'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="min-h-screen dark:bg-[#282828] w-full dark:text-white">
      {/* Top Bar - always visible */}
      <TopBar toggleClose={toggleClose} isOpen={isOpen} />

      {/* Main Content */}
      <div className="flex pt-[70px]">
        {/* Sidebar */}
        <SideBar isOpen={isOpen} toggleClose={toggleClose} />

        {/* Page Content */}
        <div className={`
          transition-all duration-300 ease-in-out ml-0 lg:ml-64
          w-full min-h-[calc(100vh-70px)] dark:bg-[#282828]
        `}>
          <div className="p-4 md:p-6 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard