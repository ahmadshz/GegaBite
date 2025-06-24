import { useEffect, useState } from 'react';
import apiClient from '../../../Api/ApiClient';
import { Link } from 'react-router-dom';

const RecipeList = ({ searchTerm, selectedCategoryId }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await apiClient.get('/api/v1/products/index');
                setData(res.data.products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filteredData = data.filter(item => {
        const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.categoryId?.name?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategoryId ?
            (item.categoryId && item.categoryId._id === selectedCategoryId) : true;

        return matchesSearch && matchesCategory;
    });

    // 🧠 تجميع المنتجات حسب الفئة
    const groupedByCategory = filteredData.reduce((acc, product) => {
        const categoryName = product.categoryId?.name || 'Uncategorized';
        if (!acc[categoryName]) {
            acc[categoryName] = [];
        }
        acc[categoryName].push(product);
        return acc;
    }, {});

    if (loading) {
        return (
            <div className='container mt-12'>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 lg:gap-x-5 gap-y-14 mb-16 lg:mb-0 '>
                    <div className='col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 flex items-center justify-center mb-4 '>
                        <div className=' w-28 h-6 bg-gray-200 dark:bg-[#282828] rounded-full' />

                    </div>

                    {[1, 2, 3, 4, 5, 6].map(index => (
                        <div key={index}
                            className='relative pt-16 cursor-pointer px-2 bg-gray-100 dark:bg-[#282828] rounded-[28px] min-h-[178px]
                             lg:min-h-[230px] text-center hover:shadow-lg transition-shadow'>
                            <div className='w-24 h-24 lg:w-28 bg-gray-200 dark:bg-[#282828] lg:h-28 object-cover rounded-full absolute top-[-40px] lg:top-[-55px] left-1/2 transform -translate-x-1/2 border-4 border-white dark:border-gray-800' />
                            <div className='flex justify-center items-center gap-1 mt-4 text-sm text-[14px] lg:text-[20px]'>
                                <div className='w-2/4 text-center ' />
                                <div className='h-[50px] lg:h-[100px] w-[2px] rounded-full bg-gray-200 dark:bg-white' />
                                <div className='w-2/4 text-center ' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='container mt-8 '>
            {Object.entries(groupedByCategory).length === 0 ? (
                <p className='text-2xl font-bold text-center min-h-[230px] flex justify-center items-center'>
                    No recipes found {searchTerm ? `for "${searchTerm}"` : ''}
                    {selectedCategoryId && ` in this category`}
                </p>
            ) : (
                Object.entries(groupedByCategory).map(([categoryName, products], index, arr) => (
                    <div
                        key={categoryName}
                        className={index === arr.length - 1 ? 'mb-16' : 'mb-4'}
                    >
                        <h2 className='text-2xl font-bold mb-14 lg:mb-20 text-center  dark:text-yellow-400'>
                            {categoryName}
                        </h2>
                        <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:col-span-5 gap-x-3 lg:gap-x-4 gap-y-14'>
                            {products.map((item) => (
                                <Link
                                    to={`/singleproduct/${item._id}`}
                                    key={item._id}
                                    className='relative pt-16 cursor-pointer bg-gray-100 dark:bg-[#282828] rounded-[28px] min-h-[190px] lg:min-h-[250px] text-center hover:shadow-lg transition-shadow flex flex-col justify-between pb-4'
                                >
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='w-24 h-24 lg:w-28 lg:h-28 object-cover rounded-full absolute top-[-40px] lg:top-[-55px] left-1/2 transform -translate-x-1/2 border-4 border-white dark:border-black'
                                    />

                                    {/* Title */}
                                    <h2 className='mt-2 px-4 text-sm font-semibold text-[14px] lg:text-[20px] leading-snug line-clamp-2'>
                                        {item.name}
                                    </h2>

                                    {/* Price & Category */}
                                    <div className='flex justify-center items-center gap-1 mt-4 text-sm text-[14px] lg:text-[18px] px-2'>
                                        <div className='w-2/4 text-center'>{item.price}$</div>
                                        <div className='h-[50px] lg:h-[80px] w-[2px] rounded-full bg-[#282828] dark:bg-white' />
                                        <div className='w-2/4 text-center break-words py-1'>
                                            {item.categoryId.name || 'Uncategorized'}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;
