import React, { useState } from 'react';
import  apiClient  from '../../../Api/ApiClient';

const AddCategories = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    const res = await apiClient.post("/api/v1/category/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true, 
    });

    console.log("Category added:", res.data);
    alert("Category added successfully");

    setTitle("");
    setImage(null);
  } catch (error) {
    console.error("Error adding category:", error);
  }
};




  return (
    <div className='flex flex-col gap-12 '>
      <h1 className='text-4xl dark:text-white font-semibold mt-4'>Add Category</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full '>
        {/* Title Field */}
        <div className='flex flex-col gap-2'>
          <label className='text-lg dark:text-white font-medium'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter category title'
            className='px-4 py-3 rounded-xl border-2 border-gray-300 bg-transparent dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff402c]'
          />
        </div>

        {/* Image Upload */}
        <div className='flex flex-col gap-2'>
          <label className='text-lg dark:text-white font-medium'>Image</label>
          <input
            type='file'
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
            className='px-4 py-2 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c2c] text-gray-800 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#282828] file:text-white hover:file:bg-[#3d3d3d]'
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='mt-4 px-6 py-4 rounded-xl bg-[#282828] dark:bg-[#515151] text-white font-semibold hover:opacity-95 transition duration-300 text-[20px]'
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategories;
