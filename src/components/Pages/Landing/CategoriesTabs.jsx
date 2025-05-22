import React, { useEffect, useState } from 'react';
import apiClient from '../../../Api/ApiClient';

const CategoriesTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        try {
            const response = await apiClient.get(`/api/v1/category/index`);
            setCategories(response.data.categories);
        } catch (err) {
            console.error('Error fetching categories:', err);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className='container '>
            <div className='flex gap-2 md:gap-5 lg:gap-6 whitespace-nowrap overflow-x-auto  red-scrollbar lg:pb-2'>
                {categories.map((tab, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer flex flex-col items-center shrink-0 `}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <div className={`px-3 py-1 lg:px-3 lg:py-4  flex items-center gap-2
                            ${activeTab === tab.id ? 'bg-[#FFF001]' : 'bg-gray-100 dark:bg-[#282828]'} w-fit rounded-full`}>
                            <img className='w-5 h-5 lg:w-7 lg:h-7' src={`${tab.image}`} alt='' />

                            <span className='text-sm lg:text-lg'>{tab.name}</span>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesTabs;
