import { BiHomeAlt, BiSolidContact } from 'react-icons/bi'
import { GrMapLocation } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'


const MobileNav = () => {
    return (
        <div className='w-full z-20 bg-white dark:bg-[#212121] fixed md:hidden bottom-0 h-[68px] flex items-center justify-evenly'>

            <NavLink to={'/'} className={({ isActive }) => isActive ? "text-[#FEC30D]" : "dark:text-white"}>
                <BiHomeAlt size={33} />
            </NavLink>
            <NavLink to={'/location'} className={({ isActive }) => isActive ? "text-[#FEC30D]" : "dark:text-white"}>
                <GrMapLocation size={31} />
            </NavLink>
            <NavLink to={'/contact'} className={({ isActive }) => isActive ? "text-[#FEC30D]" : "dark:text-white"}>
                <BiSolidContact size={31} />
            </NavLink>


        </div>
    )
}

export default MobileNav