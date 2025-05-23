import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch(searchTerm);
        }
    };

    const handleClick = () => {
        onSearch(searchTerm);
    }

    return (
        <div className='container relative my-4 lg:my-8'>
            <input
                type='search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className='p-2 pl-10 lg:pl-14 text-[14px] lg:text-[20px] h-[47px] lg:h-[65px] border lg:border-[3px] border-gray-200 dark:border-0
                 dark:bg-[#282828] rounded-full w-full focus:outline-none text-black dark:text-white focus:border-[#FEC30D]'
                placeholder='Search any recipe'
            />
            <IoSearch
                onClick={handleClick}
                className='absolute top-3 left-8 md:left-12 lg:left-16 lg:top-[18px] xl:left-20 2xl:left-24 text-gray-300 dark:text-white 
                text-[22px] lg:text-[30px] cursor-pointer'
            />
        </div>
    );
};

export default SearchBar;
