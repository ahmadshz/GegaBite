import React, { useEffect, useState } from 'react'
import apiClient from '../../Api/ApiClient';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showImage, setShowImage] = useState(false);
    const { id } = useParams();



    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await apiClient.get(`/api/v1/products/show/${id}`);
                setData([response.data.product]);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    console.log(data)

    if (loading) return <div className='dark:bg-black  font-semibold min-h-screen flex items-center justify-center'>
        <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>

    </div>;
    if (error) return <div className='dark:bg-black dark:text-white min-h-screen'>Error: {error}</div>;
    if (!data.length) return <div className='dark:bg-black dark:text-white min-h-screen'>Product not found</div>;

    return (
        <div className='dark:bg-black dark:text-white min-h-screen'>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <div className='py-14 flex items-center justify-center'>
                            <img onClick={() => setShowImage(true)} className='mx-auto w-52 h-52 rounded-md' src={item.image} alt={item.name} />
                            {
                                showImage && (
                                    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-65 z-50'>
                                        <div className='relative w-11/12 h-11/12'>
                                            <img onClick={() => setShowImage(false)} className=' w-full h-full rounded-md' src={item.image} alt={item.name} />
                                            <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setShowImage(false)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className='min-h-[calc(100vh-35vh)] container bg-gray-100 w-full dark:bg-[#282828] py-5 rounded-t-[40px]'>
                            <div className='text-center text-[32px]'>{item.name}</div>
                            <div className='flex justify-center items-center gap-1 mt-4 text-sm text-[14px] lg:text-[20px]'>
                                <div className='w-2/5 text-center text-[16px]'>{item.price}$</div>
                                <div className='h-[50px] lg:h-[100px] w-[2px] rounded-full bg-[#282828] dark:bg-white' />
                                <div className='w-2/5 text-center break-words py-2 text-[16px]'>
                                    {item.categoryId.name.length > 12
                                        ? item.categoryId.name.slice(0, 12) + '...'
                                        : item.categoryId.name}
                                </div>
                            </div>
                            <br />
                            <br />
                            <div>
                                <h1 className='text-[16px] font-semibold'>Instructions</h1>
                                <div>
                                    {
                                        item.description.map((item, index) => (
                                            <p key={index} className='mt-2'>
                                                <span className='w-2 h-2 inline-block rounded-full  mx-2 bg-[#FEC30D]'></span>
                                                {item}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default SingleProduct;
