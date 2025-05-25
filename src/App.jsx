import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Pages/Landing/Landing';
import Login from './Auth/Login';
import Website from './Pages/Website/Website';
import Contact from './Pages/Website/Contact';
import Location from './Pages/Website/Location';
import Dashboard from './Pages/Dashboard/Dashboard';
import CategoriesShow from './Pages/Dashboard/Categories/CategoriesShow';
import AddCategories from './Pages/Dashboard/Categories/AddCategories';
import ViewFoods from './Pages/Dashboard/Foods/ViewFoods';
import AddFoodPage from './Pages/Dashboard/Foods/AddFoodPage';
import EditCategory from './Pages/Dashboard/Categories/EditCategory';
import EditFood from './Pages/Dashboard/Foods/EditFood';
import RequireAuth from './Auth/RequireAuth';
import RequireBack from './Auth/RequireBack';
import SingleProduct from './Pages/Website/SingleProduct';

const App = () => {
  const [showPreload, setShowPreload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreload(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const isMainLocation = location.pathname === '/';

  if (showPreload) return (
    <div className='fixed inset-0 bg-[#FEC30D] dark:bg-black z-50 flex flex-col items-center justify-center text-center px-4'>
      {
        isMainLocation &&
        <h1 className='text-3xl font-bold text-black dark:text-white mb-4'>
          Welcome to Gega Bite

        </h1>
      }
      <div>
        <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </div>
  );

  return (
    <div>
      <Routes>
        <Route element={<RequireBack />}>
          <Route path='/login' element={<Login />} />
        </Route>

        <Route path='/' element={<Website />}>
          <Route path='/' element={<Landing />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='categries' element={<CategoriesShow />} />
            <Route path='addcategory' element={<AddCategories />} />
            <Route path='updatecategory/:id' element={<EditCategory />} />
            <Route path='viewfoods' element={<ViewFoods />} />
            <Route path='AddFoodPage' element={<AddFoodPage />} />
            <Route path='EditFoodPage/:id' element={<EditFood />} />
          </Route>
        </Route>

        <Route path='/singleproduct/:id' element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default App;
