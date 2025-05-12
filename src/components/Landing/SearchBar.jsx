import React from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBar = () => {
    return (
        <div className='container relative my-4 lg:my-8'>
            <input type='search'
                className='p-2 pl-12 text-[14px] h-[47px] border-2 border-gray-200 dark:border-0 dark:bg-[#282828] rounded-full w-full 
                           focus:outline-none text-black dark:text-white'
                placeholder='Search any recipe'
            />
            <IoSearch
                size={ 23}
                className='absolute top-3 left-8 md:left-12 lg:left-16  xl:left-20 2xl:left-24 text-gray-300 dark:text-white' />
        </div>
    )
}

export default SearchBar
