import React from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBar = () => {
    return (
        <div className='container relative my-4 lg:my-8'>
            <input type='search'
                className='p-2 pl-10 lg:pl-14 text-[14px] lg:text-[20px] h-[47px] lg:h-[65px] border lg:border-[3px] border-gray-200 dark:border-0 dark:bg-[#282828] rounded-full w-full 
                           focus:outline-none text-black dark:text-white focus:border-[#FFF002] '
                placeholder='Search any recipe'
            />
            <IoSearch
                
                className='absolute top-3 left-8 md:left-12 lg:left-16 lg:top-[22px]  xl:left-20  2xl:left-24 text-gray-300 dark:text-white text-[22px] lg:text-[30px]' />
        </div>
    )
}

export default SearchBar
