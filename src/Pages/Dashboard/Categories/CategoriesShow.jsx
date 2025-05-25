import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import apiClient from '../../../Api/ApiClient'

const CategoriesShow = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await apiClient.get(`/api/v1/category/index`);
            setCategories(response.data.categories);
        } catch  {
            setError('Error fetching categories');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // Delete category
    const handleDelete = async (id) => {
        try {
            await apiClient.delete(`/api/v1/category/delete/${id}`);
            setCategories((prev) => prev.filter((cat) => cat._id !== id));
        } catch (err) {
            console.error('Error deleting category:', err);
        }
    };

    // Pagination logic
    const totalPages = Math.ceil(categories.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='flex flex-col gap-5 lg:gap-12 pb-5'>
            <h1 className='text-2xl xl:text-4xl dark:text-white font-semibold'>Categories</h1>
            <div className="overflow-auto rounded-lg shadow-lg">
                <table className="min-w-full">
                    <thead className="bg-[#282828] text-white">
                        <tr>
                            <th className="px-6 py-2 text-left text-base lg:text-lg font-medium uppercase">ID</th>
                            <th className="px-6 py-2 text-left text-base lg:text-lg font-medium uppercase">Image</th>
                            <th className="px-6 py-2 text-left text-base lg:text-lg font-medium uppercase">Title</th>
                            <th className="px-6 py-2 text-left text-base lg:text-lg font-medium uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="border-t dark:border-gray-700">
                        {loading ? (
                            <tr className="dark:text-white">
                                <td colSpan={4} className="py-4 text-center">Loading...</td>
                            </tr>
                        ) : currentItems.length === 0 ? (
                            <tr className="dark:text-white">
                                <td colSpan={4} className="py-4 text-center">No categories found.</td>
                            </tr>
                        ) : (
                            currentItems.map((item, index) => (
                                <tr
                                    key={item._id}
                                    className="even:bg-gray-50 hover:bg-gray-200 dark:odd:bg-[#2e2e2e] dark:even:bg-[#1f1f1f] dark:hover:bg-[#3d3d3d] transition-colors dark:text-white"
                                >
                                    <td className="px-6 py-3">{indexOfFirstItem + index + 1}</td>
                                    <td className="px-6 py-3">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt="category"
                                                className="h-10 lg:h-12 w-10 lg:w-12 rounded border border-gray-500"
                                            />
                                        ) : (
                                            <span>No Image</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-3 font-medium">{item.name}</td>
                                    <td className="px-6 py-3">
                                        <div className="flex space-x-2 text-lg">
                                            <Link
                                                to={`/dashboard/updatecategory/${item._id}`}
                                                className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                            >
                                                <FaRegEdit />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                            >
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                        {error && (
                            <tr>
                                <td colSpan={4} className="py-4 text-center text-red-500">{error}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination controls */}
            {categories.length > itemsPerPage && (
                <div className="flex justify-center mt-4 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
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

export default CategoriesShow;
