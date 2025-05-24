import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import apiClient from '../../../Api/ApiClient'

const CategoriesShow = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await apiClient.get(`/api/v1/category/index`);
            setCategories(response.data.categories);
        } catch (err) {
            setError('Error fetching categories:', err);
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

    return (
        <div className='flex flex-col gap-5 lg:gap-12 pb-5 '>
            <h1 className='text-2xl xl:text-4xl dark:text-white font-semibold '>Categories</h1>
            <div className="overflow-auto rounded-lg shadow-lg   ">
                <table className="min-w-full">
                    <thead className="bg-[#282828] text-white">
                        <tr>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">ID</th>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">Image</th>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">Title</th>
                            <th className="px-6 py-2 lg:py-3 text-left text-base lg:text-lg font-medium uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="border-t dark:border-gray-700">
                        {
                            loading ? (
                                <tr className="  hover:bg-gray-200 dark:odd:bg-[#2e2e2e] dark:even:bg-[#1f1f1f] dark:hover:bg-[#3d3d3d] transition-colors dark:text-white">
                                    <td colSpan={4} className=" py-4 whitespace-nowrap text-lg font-semibold text-center ">Loading...</td>
                                </tr>
                            ) :
                                categories.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="even:bg-gray-50 hover:bg-gray-200 dark:odd:bg-[#2e2e2e] dark:even:bg-[#1f1f1f] dark:hover:bg-[#3d3d3d] transition-colors dark:text-white"
                                    >
                                        <td className="px-6 py-3 lg:py-4 whitespace-nowrap text-sm">{index + 1}</td>
                                        <td className="px-6  whitespace-nowrap">
                                            <div className="flex-shrink-0  ">
                                                <img
                                                    className=" h-10 lg:h-12 w-10 lg:w-12 rounded border border-gray-500"
                                                    src={`${item.image}`}
                                                    alt="avatar"
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 lg:py-4 whitespace-nowrap font-medium">{item.name}</td>
                                        <td className="px-6 py-3 lg:py-4 whitespace-nowrap">
                                            <div className="flex space-x-2 text-[16px] lg:text-[20px]">
                                                <Link
                                                    to={`/dashboard/updatecategory/${item._id}`}
                                                    className="px-3 py-2 bg-blue-600 dark:text-white rounded hover:bg-blue-700 transition-colors text-white"
                                                >
                                                    <FaRegEdit />
                                                </Link>
                                                <button onClick={() => handleDelete(item._id)} className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))

                        }
                        {
                            error && (
                                <tr className="  hover:bg-gray-200 dark:odd:bg-[#2e2e2e] dark:even:bg-[#1f1f1f] dark:hover:bg-[#3d3d3d] transition-colors dark:text-white">
                                    <td colSpan={4} className=" py-4 whitespace-nowrap text-lg font-semibold text-center ">{error}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoriesShow