import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import apiClient from '../../../Api/ApiClient';

const ViewFoods = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchFoods = async () => {
            setLoading(true);
            try {
                const response = await apiClient.get('/api/v1/products/index');
                setFoods(response.data.products);
            } catch (error) {
                console.error('Error fetching foods:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();
    }, []);

    const deleteFood = async (id) => {
        try {
            await apiClient.delete(`/api/v1/products/delete/${id}`);
            setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
        } catch (error) {
            console.error('Error deleting food:', error);
        }
    };

    // Pagination calculations
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedFoods = foods.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(foods.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='flex flex-col gap-5 lg:gap-12'>
            <h1 className='text-2xl lg:text-4xl dark:text-white font-semibold'>Foods</h1>

            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full">
                    <thead className="bg-[#282828] text-white">
                        <tr>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">ID</th>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">Image</th>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">Category</th>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">Title</th>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">Price</th>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="border-t dark:border-gray-700">
                        {loading && (
                            <tr>
                                <td colSpan={7} className='px-6 py-4 whitespace-nowrap font-semibold text-center'>Loading...</td>
                            </tr>
                        )}
                        {!loading && paginatedFoods.length === 0 && (
                            <tr>
                                <td colSpan={7} className='px-6 py-4 whitespace-nowrap text-center font-semibold'>No Foods Found</td>
                            </tr>
                        )}
                        {!loading && paginatedFoods.map((item, index) => (
                            <tr
                                key={index}
                                className="even:bg-gray-50 hover:bg-gray-200 dark:odd:bg-[#2e2e2e] dark:even:bg-[#1f1f1f] dark:hover:bg-[#3d3d3d] transition-colors dark:text-white"
                            >
                                <td className="px-6 py-3 lg:py-4 whitespace-nowrap">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                <td className="px-6 whitespace-nowrap">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 lg:h-12 w-10 lg:w-12 rounded border border-gray-500"
                                            src={item.image}
                                            alt="food"
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-3 lg:py-4 whitespace-nowrap font-medium">{item.categoryId.name}</td>
                                <td className="px-6 py-3 lg:py-4 whitespace-nowrap font-medium">{item.name}</td>
                                <td className="px-6 py-3 lg:py-4 whitespace-nowrap font-medium">{item.price}</td>
                                <td className="px-6 py-3 lg:py-4 whitespace-nowrap">
                                    <div className="flex space-x-2 text-[16px] lg:text-[20px]">
                                        <Link
                                            to={`/dashboard/EditFoodPage/${item._id}`}
                                            className="px-3 py-2 bg-blue-600 dark:text-white rounded hover:bg-blue-700 transition-colors text-white"
                                        >
                                            <FaRegEdit />
                                        </Link>
                                        <button
                                            onClick={() => deleteFood(item._id)}
                                            className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                                        >
                                            <MdDelete />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-4 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                           className={`px-3 py-1 rounded-md border text-sm font-medium ${
                                currentPage === i + 1
                                    ? 'bg-[#282828] text-white '
                                    : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-black dark:text-white'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewFoods;
