import { useEffect, useState } from "react";
import apiClient from "../../../Api/ApiClient";

const CategoriesTabs = ({ onCategorySelect, selectedCategoryId }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {
        try {
            const response = await apiClient.get('/api/v1/category/index');
            setCategories(response.data.categories);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching categories:', err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleTabClick = (tab) => {
        // Toggle selection if clicking the same category
        const newCategoryId = tab._id === selectedCategoryId ? null : tab._id;
        onCategorySelect(newCategoryId);
    };

    if (loading) {
        return (
            <div className='container'>
                <div className='flex gap-2 md:gap-5 lg:gap-6 overflow-x-auto red-scrollbar'>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className='shrink-0'>
                            <div className='w-24 h-6 flex items-center gap-2 bg-gray-200 dark:bg-[#282828] rounded-full animate-pulse'>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className='flex gap-2 md:gap-5 lg:gap-6 whitespace-nowrap overflow-x-auto red-scrollbar lg:pb-2'>
                {/* All Categories Tab */}
                <div className='cursor-pointer flex flex-col items-center shrink-0'>
                    <div
                        className={`px-3 py-1 lg:px-3 lg:py-4 flex items-center gap-2
                            ${!selectedCategoryId ? 'bg-[#FEC30D]' : 'bg-gray-100 dark:bg-[#282828]'} 
                            w-fit rounded-full`}
                        onClick={() => onCategorySelect(null)}
                    >
                        <span className='text-sm lg:text-lg'>All</span>
                    </div>
                </div>

                {/* Category Tabs */}
                {categories.map((tab) => (
                    <div
                        key={tab._id}
                        className='cursor-pointer flex flex-col items-center shrink-0'
                        onClick={() => handleTabClick(tab)}
                    >
                        <div className={`px-3 py-1 lg:px-3 lg:py-4 flex items-center gap-2
                            ${selectedCategoryId === tab._id ? 'bg-[#FEC30D]' : 'bg-gray-100 dark:bg-[#282828]'} 
                            w-fit rounded-full`}
                        >
                            {
                                tab.image &&
                                    <img
                                        className='w-5 h-5 lg:w-7 lg:h-7 object-cover rounded-full'
                                        src={tab.image}
                                        alt={tab.name}
                                    />
                            }
                            <span className='text-sm lg:text-lg'>{tab.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesTabs;