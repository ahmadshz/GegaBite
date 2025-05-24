import logo from '../../../assets/logo.png'
import hand from '../../../assets/hand.svg'
import qr from '../../../assets/QR.svg'
import { IoSunnyOutline } from 'react-icons/io5'
import { HiMoon } from 'react-icons/hi'
import bgImage from '../../../assets/bg.jpg'

const Navabr = ({ toggleDarkMode, darkMode }) => {


    return (
        <div>
            <div className=' py-1 lg:py-2  bg-white dark:bg-black  flex items-center justify-between  container'>
                <div className=' dark:bg-white p-3   rounded-full bg- w-fit'>
                    <img className='w-[60px] h-[60px] rounded-md' src={logo} alt='logo' />
                </div>
                <button
                    onClick={toggleDarkMode}
                    className='  bg-gray-100 dark:bg-[#282828]  text-black dark:text-white p-2 rounded-full flex 
                    items-center text-[22px] lg:text-[35px]'
                >
                    {darkMode ? <HiMoon className='text-[#FEC30D]' /> : <IoSunnyOutline />}
                </button>

            </div>
            <div className=' flex flex-col gap-4 lg:gap-8'>

                <div
                    className="flex items-center justify-center h-[300px] lg:h-[800px] w-full bg-cover bg-center "
                    style={{ backgroundImage: `url(${bgImage})` }}
                >

                </div>
                <div className=' relative container'>
                    <div className='flex flex-col gap-4 lg:gap-8 '>
                        <div className='flex items-center gap-2 '>
                            <h3 className='text-[20px] lg:text-[40px] leading-4'>Hello</h3>
                            <img className='mb-1 lg:w-[35px]' src={hand} alt='hand icon' />
                        </div>
                        <h1 className='text-[28px] lg:text-[48px] font-semibold flex flex-col leading-7 md:leading-10 gap-2 '>
                            <div>GEGA<span className='text-[#FEC30D]'>BITE</span></div>
                            <div>ENJOY EVERY BITE</div>
                        </h1>

                    </div>

                    <img className='w-16 md:w-28 lg:w-40 absolute top-0 right-4 md:right-8 lg:right-[50px] xl:right-[75px] 2xl:right-[90px]' src={qr} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Navabr
