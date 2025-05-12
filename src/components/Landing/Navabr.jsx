import logo from '../../assets/logo.png'
import hand from '../../assets/hand.svg'
import {  useState } from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { HiMoon } from 'react-icons/hi'


const Navabr = () => {
    const [darkMode, setDarkMode] = useState(false)


    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };


    return (
        <div className='container flex flex-col gap-4 lg:gap-6   '>
            <div className='flex items-center justify-between'>
                <div className='p-1 lg:p-4 rounded-md bg-white w-fit'>
                    <img className='w-[40px] lg:w-[80px] h-[40px] lg:h-[80px] rounded-md ' src={logo} alt='' />
                </div>
                <button
                    onClick={toggleDarkMode}
                    className='  bg-gray-200 dark:bg-[#282828] text-black dark:text-white p-2 rounded-full flex items-center'
                >
                    { darkMode ? <HiMoon size={25} className='text-[#FFF002]'  /> : <IoSunnyOutline size={25} /> }
                </button>
            </div>
            <div className='flex items-center gap-2'>
                <h3 className='text-[20px] lg:text-[30px] leading-4'>Hello</h3>
                <img className='mb-1 lg:mb-0' src={hand} alt='' />
            </div>
            <h1 className='text-[28px] lg:text-[38px] leading-8 font-semibold'>
                GEGA<span className='text-[#FFF002]'>BITE</span> ENJOY EVERY BITE
            </h1>
        </div>
    )
}

export default Navabr