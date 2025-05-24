import React, { useEffect, useState } from 'react';
import apiClient from '../../../Api/ApiClient';
import { useNavigate, useParams } from 'react-router-dom';

const EditFood = () => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [descriptions, setDescriptions] = useState(['']);
    const [image, setImage] = useState(null);
    const [existingImage, setExistingImage] = useState('');
    const [imagePublicId, setImagePublicId] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [getCategories, setGetCategories] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();


    //  Handle Get Categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiClient.get('/api/v1/category/index');
                setGetCategories(response.data.categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

        fetchCategories();
    }, [])


    // Fetch product data
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await apiClient.get(`/api/v1/products/show/${id}`);
                const product = response.data.product;

                setCategory(product.categoryId || '');
                setName(product.name);
                setPrice(product.price);
                setDescriptions(product.description || ['']);
                setExistingImage(product.image || '');
                setImagePublicId(product.image_public_id || '');
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };



        fetchProduct();
    }, [id]);

    const handleDescriptionChange = (index, value) => {
        const updated = [...descriptions];
        updated[index] = value;
        setDescriptions(updated);
    };

    const addDescriptionField = () => {
        setDescriptions([...descriptions, '']);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const formData = new FormData();
            formData.append('categoryId', category);
            formData.append('name', name);
            formData.append('price', price);
            formData.append('description', descriptions.join('\n'));

            if (image) {
                formData.append('image', image);
                formData.append('public_id', imagePublicId); // Include if you're replacing the old Cloudinary image
            }

            const response = await apiClient.put(`/api/v1/products/update/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });

            if (response.data.success) {
                navigate('/dashboard/viewfoods');
            }
        } catch {
            setMessage('Failed to update food, please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-5 lg:gap-12">
            <h1 className=" text-2xl xl:text-4xl dark:text-white font-semibold ">Edit Food</h1>

            <form className="flex flex-col  gap-3 lg:gap-6 w-full" onSubmit={handleSubmit}>
                {/* Category */}
                <div className="flex flex-col lg:gap-2">
                    <label className=" text-base lg:text-lg dark:text-white font-medium">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-4 py-2 lg:py-3 rounded-xl border-2 dark:bg-[#3d3d3d] dark:text-white"
                        required
                    >
                        <option value="" disabled>Select a category</option>
                        {getCategories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Name */}
                <div className="flex flex-col lg:gap-2">
                    <label className=" text-base lg:text-lg dark:text-white font-medium">Title</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-2 lg:py-3 rounded-xl border-2 border-gray-300 bg-transparent dark:border-gray-600"
                        required
                    />
                </div>

                {/* Price */}
                <div className="flex flex-col lg:gap-2">
                    <label className=" text-base lg:text-lg dark:text-white font-medium">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="px-4 py-2 lg:py-3 rounded-xl border-2 border-gray-300 bg-transparent dark:border-gray-600"
                        required
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col lg:gap-2">
                    <label className="text-base lg:text-lg dark:text-white font-medium">Description</label>
                    <div className="flex flex-col gap-2">
                        {descriptions.map((desc, index) => (
                            <input
                                key={index}
                                type="text"
                                value={desc}
                                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                className="px-4 py-2 lg:py-3 rounded-xl border-2 border-gray-300 bg-transparent dark:border-gray-600"
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={addDescriptionField}
                        className="text-sm mt-1 w-fit px-3 dark:text-white hover:opacity-90"
                    >
                        + Add More Description
                    </button>
                </div>

                {/* Image */}
                <div className="flex flex-col gap-2">
                    <label className=" text-base lg:text-lg dark:text-white font-medium">Image</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="px-4 py-2 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c2c] text-gray-800 dark:text-white
              file:mr-4  file:py-1 lg:file:py-2  file:px-4 file:rounded-full file:border-0 file:text-sm
               file:font-semibold file:bg-[#282828] file:text-white hover:file:bg-[#3d3d3d]"          />
                </div>
                {
                    existingImage && (
                        <div className="flex flex-col gap-2">
                            <img
                                src={existingImage}
                                alt="Existing"
                                className="w-40 h-40  rounded-lg"
                            />
                        </div>
                    )
                }

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`mt-4 mb-5 px-6 py-2 lg:py-4  rounded-xl bg-[#282828] dark:bg-[#515151] text-white font-semibold  transition
                     duration-300  text-[18px] lg:text-[20px]  ${loading ? "opacity-80 cursor-not-allowed" : "opacity-100"} `}                >
                    {loading ? 'Updating...' : 'Update Food'}
                </button>

                {message &&
                    <p className={`mt-3 text-red-500  font-semibold text-xl`}>
                        {message}</p>}
            </form>
        </div>
    );
};

export default EditFood;
