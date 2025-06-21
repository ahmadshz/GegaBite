import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import BtnToTop from './components/Ui/BtnToTop';
import img from './assets/logo.png'

const App = () => {
  const location = useLocation();
  const [showPreload, setShowPreload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreload(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const isMainLocation = location.pathname === '/';

  const showBtnToTop = !location.pathname.startsWith('/dashboard') && location.pathname !== '/login' && !location.pathname.startsWith('/singleproduct');
  ;

  if (showPreload) return (
    <div className='fixed inset-0 bg-[#FEC30D]  z-50 flex flex-col items-center justify-center text-center px-4'>
      <div className='bg-white p-4 rounded-full w-32 h-32 flex items-center justify-center'>
        <img src={img} className=' w-[85%]' alt='' />

      </div>
      {
        isMainLocation &&
        <h1 className=' text-2xl lg:text-3xl font-bold text-black  mt-4'>
          Welcome to Gega Bite
        </h1>
      }

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

      {showBtnToTop && <BtnToTop />}
    </div>
  );
};

export default App;
