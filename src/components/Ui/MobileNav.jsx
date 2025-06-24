import { NavLink } from 'react-router-dom'
import { BiHomeAlt, BiSolidContact } from 'react-icons/bi'
import { GrMapLocation } from 'react-icons/gr'

const BottomNav = () => {
  return (
    <div className='z-20 left-3 right-3 rounded-full bg-gray-300/30 backdrop-blur-md dark:bg-[#212121]/50 fixed md:hidden bottom-3 h-[65px]
     grid grid-cols-3 items-center gap-2 px-4 shadow-lg transition-all duration-300'>

      {[
        { to: '/', icon: <BiHomeAlt size={24} />, label: 'Home' },
        { to: '/location', icon: <GrMapLocation size={24} />, label: 'Location' },
        { to: '/contact', icon: <BiSolidContact size={24} />, label: 'Contact' },
      ].map((item) => (
        <NavLink key={item.to} to={item.to}>
          {({ isActive }) => (
            <div
              className={`
                group p-3 rounded-full flex items-center justify-between gap-2
                transition-all duration-300 ease-in-out
                ${isActive
                  ? "text-[#FEC30D] bg-gray-200 dark:bg-[#2a2a2a] "
                  : "dark:text-white hover:bg-gray-100/20"}
              `}
            >
              {item.icon}
              <span className={`text-sm font-medium transition-opacity duration-200 ${isActive ? 'opacity-100' : 'text-black dark:text-white group-hover:opacity-100'}`}>
                {item.label}
              </span>
            </div>
          )}
        </NavLink>
      ))}

    </div>
  )
}

export default BottomNav
