import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://gegabitesapi.onrender.com/api/v1/user/login`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true
                }
            });

            console.log(res.data); 

            if (res.data.success) {
                const token = res.data.accessToken;

                localStorage.setItem('access_token', token);

                navigate('/dashboard/categries');
            }


        } catch (err) {
            console.log('Login error:', err);
        }
    };

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <div className={`min-h-screen flex items-center justify-center dark:bg-black `}>


            <div className=" w-[85%] max-w-md p-8 space-y-8 bg-white dark:bg-[#282828] rounded-lg shadow-lg border border-gray-200">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold  dark:text-white">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-white">
                        Sign in to your account
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#282828] dark:text-white"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm
                                 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-[#282828] dark:text-white"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>



                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm 
                            font-bold text-white bg-[#efcc42] focus:outline focus:outline-2  hover:bg-[#FFD700] dark:hover:bg-[#FFD700]  dark:text-black "
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;