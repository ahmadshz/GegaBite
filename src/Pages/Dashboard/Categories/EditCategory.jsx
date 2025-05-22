import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../../../Api/ApiClient";

const EditCategory = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [publicId, setPublicId] = useState("");
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null);

    useEffect(() => {
        // Fetch category data to populate fields
        const fetchCategory = async () => {
            try {
                const response = await apiClient.get(`/api/v1/category/show/${id}`);
                const { name, image_public_id } = response.data.category;
                setTitle(name);
                setPublicId(image_public_id); // Save public_id for image replacement
            } catch (error) {
                console.error("Error fetching category:", error);
            }
        };

        fetchCategory();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const formData = new FormData();
            formData.append("name", title);
            if (image) {
                formData.append("image", image);
                formData.append("public_id", publicId); // Required by backend
            }

            await apiClient.put(`/api/v1/category/update/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });

            navigate("/dashboard/categries");
        } catch {
            setMessage("Error editing category. Please try again.");
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex flex-col gap-12">
            <h1 className="text-4xl dark:text-white font-semibold mt-4">
                Edit Category
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                {/* Title Field */}
                <div className="flex flex-col gap-2">
                    <label className="text-lg dark:text-white font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter category title"
                        className="px-4 py-3 rounded-xl border-2 border-gray-300 bg-transparent dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff402c]"
                    />
                </div>

                {/* Image Upload */}
                <div className="flex flex-col gap-2">
                    <label className="text-lg dark:text-white font-medium">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="px-4 py-2 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2c2c2c] text-gray-800 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#282828] file:text-white hover:file:bg-[#3d3d3d]"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`mt-4 px-6 py-4 rounded-xl bg-[#282828] dark:bg-[#515151] text-white font-semibold  transition
                     duration-300 text-[20px]  ${loading ? "opacity-80 cursor-not-allowed" : "opacity-100"} `}
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update Category"}
                </button>
                {message && <p className="text-red-500 mt-3 font-semibold text-xl">{message}</p>}

            </form>
        </div>
    );
};

export default EditCategory;
