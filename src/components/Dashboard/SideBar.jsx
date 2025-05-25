import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { MdOutlineAddCircleOutline, MdOutlineFastfood } from 'react-icons/md';
import { TbCategory2, TbCategoryPlus } from 'react-icons/tb';
import { NavLink, useNavigate } from 'react-router-dom';
import apiClient from '../../Api/ApiClient';

const SideBar = ({ isOpen, toggleClose }) => {
  const navigate = useNavigate();

  const navLink = [
    {
      icon: <TbCategory2 size={24} />,
      title: "Categories",
      link: "/dashboard/categries"
    },
    {
      icon: <TbCategoryPlus size={24} />,
      title: "Add Category",
      link: "/dashboard/addcategory"
    },
    {
      icon: <MdOutlineFastfood size={24} />,
      title: "ViewFoods",
      link: "/dashboard/viewfoods"
    },
    {
      icon: <MdOutlineAddCircleOutline size={24} />,
      title: "AddFood",
      link: "/dashboard/AddFoodPage"
    },
  ];

  const handleLogout = () => {
    apiClient.get('/api/v1/user/logout').then(() => {
      localStorage.removeItem("access_token");
      navigate('/');
    });
  };

  return (
    <div className={`lg:fixed bottom-0 ${isOpen ? "fixed z-30 w-60 xl:w-80 px-3 lg:px-8" : " w-0 border-r-0 lg:border-r-2 lg:w-20 lg:px-4"} 
      h-[calc(100vh-70px)] xl:h-[calc(100%-80px)] border-r-2 border-[#282828] dark:border-gray-600 
      flex flex-col items-center justify-between gap-3 py-4 dark:bg-[#282828] duration-300 bg-white`}>

      <div className='flex flex-col w-full gap-3'>
        {navLink.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            onClick={() => window.innerWidth < 1024 && toggleClose()}
            className={({ isActive }) =>
              `text-xl font-semibold w-full rounded-md flex items-center gap-2 dark:text-white
              ${isOpen ? "p-3" : "hidden lg:flex lg:justify-center lg:p-2"}
              ${isActive ? "lg:bg-gray-200 lg:dark:bg-[#515151]" : ""}
              ${isActive && isOpen ? "bg-gray-200 dark:bg-[#515151]" : ""}`
            }
          >
            {item.icon}
            <span className={`${isOpen ? "block" : "hidden"} text-[16px] lg:text-[20px] text-nowrap`}>
              {item.title}
            </span>
          </NavLink>
        ))}
      </div>

      <button
        onClick={handleLogout}
        className={`${isOpen ? "" : "flex lg:justify-center"} font-semibold w-full rounded-md flex items-center gap-2 bg-red-600 text-white p-3`}
      >
        <BiLogOut size={24} />
        <span className={`${isOpen ? "block" : "hidden"} text-nowrap`}>
          LogOut
        </span>
      </button>
    </div>
  );
};

export default SideBar;