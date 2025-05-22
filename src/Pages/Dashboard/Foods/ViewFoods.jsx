import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import apiClient from '../../../Api/ApiClient'

const ViewFoods = () => {
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchFoods = async () => {
            setLoading(true)
            try {
                const response = await apiClient.get('/api/v1/products/index');
                setFoods(response.data.products);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false)
            }
        }

        fetchFoods();
    }, [])

    const deleteFood = async (id) => {
        try {
            await apiClient.delete(`/api/v1/products/delete/${id}`);
            setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
        } catch (error) {
            console.error('Error deleting food:', error);
        }
    };

    return (
        <div className='flex flex-col gap-12 '>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl dark:text-white font-semibold '>Foods</h1>

                <input type='search' placeholder='Search'
                    className='p-2 pl-5 text-[16px] h-[47px] border border-gray-400 dark:border dark:border-[#808080] dark:bg-[#282828] 
                               rounded-full w-[300px]  focus:outline-none text-black dark:text-white focus:border-gray-600 duration-300' />

            </div>
            <div className="overflow-hidden rounded-lg shadow-lg  mt-4 ">
                <table className="min-w-full">
                    <thead className="bg-[#282828] text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-lg font-medium uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-lg font-medium uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-lg font-medium uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-lg font-medium uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-lg font-medium uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-lg font-medium uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-lg font-medium uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="border-t dark:border-gray-700">
                        {
                            loading && <tr><td colSpan={7} className='px-6 py-4 whitespace-nowrap font-semibold text-center'>Loading...</td></tr>
                        }
                        {
                            foods.length === 0 ? !loading && <tr><td colSpan={7} className='px-6 py-4 whitespace-nowrap text-center font-semibold'>No Foods Found</td></tr>
                                :
                                foods.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="even:bg-gray-50 hover:bg-gray-200 dark:odd:bg-[#2e2e2e] dark:even:bg-[#1f1f1f] dark:hover:bg-[#3d3d3d] transition-colors dark:text-white"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap ">{index + 1}</td>
                                        <td className="px-6  whitespace-nowrap">
                                            <div className="flex-shrink-0  ">
                                                <img
                                                    className="h-12 w-12 rounded border border-gray-500"
                                                    src={`${item.image}`}
                                                    alt="avatar"
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.slug}</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.price}</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium">Sample Product</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex space-x-2">
                                                <Link
                                                    to={`/dashboard/EditFoodPage/${item._id}`}
                                                    className="px-3 py-2 bg-blue-600 dark:text-white rounded hover:bg-blue-700 transition-colors text-white"
                                                >
                                                    <FaRegEdit size={20} />
                                                </Link>
                                                <button onClick={() => deleteFood(item._id)} className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                                                    <MdDelete size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewFoods