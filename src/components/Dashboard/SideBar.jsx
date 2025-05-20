import React from 'react'
import { MdOutlineAddCircleOutline, MdOutlineFastfood } from 'react-icons/md';
import { TbCategory2 } from "react-icons/tb";
import { TbCategoryPlus } from 'react-icons/tb';
import { Link, NavLink } from 'react-router-dom';

const SideBar = ({ isOpen }) => {
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
            title: "ViewFoods	",
            link: "/dashboard/viewfoods	"
        },
        {
            icon: <MdOutlineAddCircleOutline size={24} />,
            title: "AddFood	",
            link: "/dashboard/AddFoodPage"
        },
    ]


    return (
        <div className={`fixed bottom-0 ${isOpen ? " w-60 xl:w-80 px-8 " : " w-20 px-4 "} h-[calc(100vh-70px)]  lg:h-[calc(100%-80px)]  border-r-2  border-[#282828] dark:border-gray-600   
         flex flex-col   items-center gap-3   py-4  dark:bg-[#282828]  duration-300`}>

            {
                navLink.map((item, index) => (
                    <NavLink
                        to={item.link}
                        key={index}
                        className={({ isActive }) =>
                            `text-xl font-semibold w-full rounded-md flex items-center gap-2
                              ${isOpen ? "p-3" : "justify-center p-2"}
                              ${isActive ? "bg-gray-200 dark:bg-[#3d3d3d] " : " dark:text-white"}`
                        }
                    >
                        {item.icon}
                        <span className={`${isOpen ? "block" : "hidden"} text-nowrap`}>
                            {item.title}
                        </span>
                    </NavLink>

                ))
            }

        </div>
    )
}

export default SideBar