import logo from '../../../assets/logo.png'
import hand from '../../../assets/hand.svg'
import { useEffect, useState } from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { HiMoon } from 'react-icons/hi'
import bgImage from '../../../assets/bg.jpg'

const Navabr = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true'
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev)
    }

    return (
        <div className=' flex flex-col gap-4 lg:gap-8'>
            <div
                className="flex items-center justify-between h-64 w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className='absolute top-4 left-4 p-2 rounded-md bg- w-fit'>
                    <img className='w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] rounded-md' src={logo} alt='logo' />
                </div>
                <button
                    onClick={toggleDarkMode}
                    className='absolute top-4 right-4  bg-gray-200 dark:bg-[#282828] text-black dark:text-white p-3 rounded-full flex items-center text-[22px] lg:text-[40px]'
                >
                    {darkMode ? <HiMoon className='text-[#FEC30D]' /> : <IoSunnyOutline />}
                </button>
            </div>
            <div className='flex items-center gap-2 container'>
                <h3 className='text-[20px] lg:text-[40px] leading-4'>Hello</h3>
                <img className='mb-1 lg:w-[35px]' src={hand} alt='hand icon' />
            </div>
            <h1 className='text-[28px] lg:text-[48px] font-semibold flex flex-col leading-7 md:leading-10 gap-2 container'>
                <div>GEGA<span className='text-[#FEC30D]'>BITE</span></div>
                <div>ENJOY EVERY BITE</div>
            </h1>
        </div>
    )
}

export default Navabr
