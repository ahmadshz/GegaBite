import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { MdOutlineAddCircleOutline, MdOutlineFastfood } from 'react-icons/md';
import { TbCategory2, TbCategoryPlus } from 'react-icons/tb';
import { NavLink, useNavigate } from 'react-router-dom';
import apiClient from '../../Api/ApiClient';
import { LuPanelLeftClose } from 'react-icons/lu';

const SideBar = ({ isOpen, toggleClose }) => {
  const navigate = useNavigate();

  const navLink = [
    { icon: <TbCategory2 size={24} />, title: 'Categories', link: '/dashboard/categries' },
    { icon: <TbCategoryPlus size={24} />, title: 'Add Category', link: '/dashboard/addcategory' },
    { icon: <MdOutlineFastfood size={24} />, title: 'ViewFoods', link: '/dashboard/viewfoods' },
    { icon: <MdOutlineAddCircleOutline size={24} />, title: 'AddFood', link: '/dashboard/AddFoodPage' },
  ];

  const handleLogout = () => {
    apiClient.post('/api/v1/user/logout', {}, { withCredentials: true }).then(() => {
      localStorage.removeItem('access_token');
      navigate('/');
    });
  };

  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleClose}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed bottom-0 z-40 h-full lg:h-[calc(100vh-70px)] xl:h-[calc(100vh-70px)]  bg-white dark:bg-[#282828]
          border-r-2 border-[#282828] dark:border-gray-600
          duration-400 flex flex-col justify-between py-4
          transition-transform ease-in-out
          ${isOpen ? 'translate-x-0 ' : '-translate-x-full  '}
           lg:translate-x-0 w-64   
        `}
      >
        <div className="flex flex-col gap-4 px-4 lg:py-2">
          {/* Header for mobile */}
          <div className="flex items-center gap-3 mb-6 lg:hidden">
            <LuPanelLeftClose
              onClick={toggleClose}
              className="text-3xl dark:text-white cursor-pointer"
            />
            <h1 className="text-2xl font-bold dark:text-white">Gega Bite</h1>
          </div>

          {/* Navigation */}
          {navLink.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              onClick={() => window.innerWidth < 1024 && toggleClose()}
              className={({ isActive }) =>
                `
                  flex items-center gap-3 rounded-md font-medium
                  ${isActive ? 'bg-gray-200 dark:bg-[#515151]' : ''}
                  text-gray-800 dark:text-white
                  p-3  lg:p-2 
                `
              }
            >
              {item.icon}
              <span className={`text-sm lg:text-lg `}>
                {item.title}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Logout */}
        <div className="px-4 lg:px-2">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 bg-red-600 text-white p-3 rounded-md w-full "
          >
            <BiLogOut size={24} />
            <span className={` text-sm lg:text-[16px]`}>
              LogOut
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
