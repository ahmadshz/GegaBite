import React, { useState } from 'react';
import fire from '../../../assets/noto_fire.svg';

const CategoriesTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, name: 'Popular' },
        { id: 1, name: 'Trending' },
        { id: 2, name: 'New' },
        { id: 3, name: 'Healthy' },
        { id: 4, name: 'Quick' },
        { id: 5, name: 'Desserts' },
        { id: 6, name: 'Drinks' },
        { id: 7, name: 'Breakfast' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 8, name: 'Lunch' },
        { id: 9, name: 'Dinner' },
        { id: 10, name: 'Top' }
    ];

    return (
        <div className='container '>
            <div className='flex gap-5 lg:gap-6 whitespace-nowrap overflow-x-auto  red-scrollbar lg:pb-2'>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer flex flex-col items-center shrink-0 `}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <div className={`px-2 py-3 lg:px-3 lg:py-4 ${activeTab === tab.id ? 'bg-[#FFF002]' : 'bg-gray-100 dark:bg-[#282828]'} w-fit rounded-full`}>
                            <img className='w-7 h-7 lg:w-9 lg:h-9' src={fire} alt='' />
                        </div>
                        <h1 className={`mt-1 lg:mt-3 text-[14px] lg:text-[18px] text-center font-[400] ${activeTab === tab.id ? 'dark:text-white opacity-100' : 'dark:text-white opacity-50'}`}>
                            {tab.name}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesTabs;
