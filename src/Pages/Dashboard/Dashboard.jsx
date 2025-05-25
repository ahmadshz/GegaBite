import React, { useState } from 'react'
import TopBar from '../../components/Dashboard/TopBar'
import SideBar from '../../components/Dashboard/SideBar'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false) // Closed by default on mobile

  const toggleClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="min-h-screen dark:bg-black w-full dark:text-white">
      {/* Top Bar - always visible */}
      <TopBar toggleClose={toggleClose} isOpen={isOpen} />

      {/* Main Content */}
      <div className="flex pt-[70px] ">
        {/* Sidebar - hidden on mobile when closed */}
        {isOpen && (
          <div className="fixed inset-0 z-20 lg:hidden" onClick={toggleClose}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        )}
        <SideBar isOpen={isOpen} toggleClose={toggleClose} />

        {/* Page Content */}
        <div className={`transition-all  duration-300 ${isOpen ? 'lg:pl-60 xl:pl-80' : 'lg:pl-20'} w-full min-h-[calc(100vh-70px)] dark:bg-[#282828]`}>
          <div className="p-4 md:p-6 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard