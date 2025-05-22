import React, { useEffect, useState } from 'react'
import apiClient from '../../Api/ApiClient';
import { useParams } from 'react-router-dom';
import { DateRange } from '@mui/icons-material';

const SingleProduct = () => {
    const [data, setData] = useState(null); // Initialize as null instead of empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await apiClient.get(`/api/v1/products/show/${id}`);
                setData(response.data.product);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]); // Add id as dependency to refetch if it changes

    if (loading) return <div className='dark:bg-black dark:text-white min-h-screen'>Loading...</div>;
    if (error) return <div className='dark:bg-black dark:text-white min-h-screen'>Error: {error}</div>;
    if (!data) return <div className='dark:bg-black dark:text-white min-h-screen'>Product not found</div>;

    return (
        <div className='dark:bg-black dark:text-white min-h-screen'>
            <div className='h-[35vh] flex items-center justify-center'>
                <img className=' mx-auto' src={`${data.image}`} alt='' />
            </div>
            <div className='min-h-[calc(100vh-35vh)] container bg-gray-100 w-full dark:bg-[#282828] py-5 rounded-t-[40px]'>
                <div className='text-center text-[32px] '>{data.name}</div>
                <div className='flex justify-center items-center gap-1 mt-4 text-sm text-[14px] lg:text-[20px]'>
                    <div className='w-2/5 text-center'>{data.price}$</div>
                    <div className='h-[50px] lg:h-[100px] w-[2px]  rounded-full bg-[#282828] dark:bg-white' />
                    <div className='w-2/5 text-center break-words py-2'>
                        {
                            /** 
                            item.category.length > 12 ? item.category.slice(0, 12) + '...' : item.category
*/

                        } sadasd
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct