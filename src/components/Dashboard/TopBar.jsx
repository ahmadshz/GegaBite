import { LuPanelLeftClose } from "react-icons/lu";
import { LuPanelRightClose } from "react-icons/lu";


const TopBar = ({ toggleClose, isOpen }) => {


    return (
        <div className=' fixed z-10 h-[70px] xl:h-20 w-full border-b-2 border-[#282828] dark:border-gray-600 bg-white dark:bg-[#282828] '>
            <div className='px-8 h-full flex items-center gap-5'>
                {
                    isOpen ?
                        <LuPanelLeftClose onClick={toggleClose} className='text-4xl  dark:text-white' />
                        :
                        <LuPanelRightClose onClick={toggleClose} className='text-4xl  dark:text-white ' />
                }
                <h1 className='text-4xl font-bold  dark:text-white'>Gega Bite</h1>
            </div>
        </div>
    )
}

export default TopBar