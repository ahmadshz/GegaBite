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
import img from './assets/logo.png';
import 'animate.css';

const App = () => {
  const location = useLocation();

  const [showPreload, setShowPreload] = useState(true);
  const [hidePreload, setHidePreload] = useState(false);
  const [showAppContent, setShowAppContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidePreload(true);
      setTimeout(() => {
        setShowPreload(false);
        setShowAppContent(true);
      }, 1000); // مدة fadeOut
    }, 2000); // وقت ظهور الـ Preloader

    return () => clearTimeout(timer);
  }, []);


  const showBtnToTop =
    !location.pathname.startsWith('/dashboard') &&
    location.pathname !== '/login' &&
    !location.pathname.startsWith('/singleproduct');

  if (showPreload) {
    return (
      <div
        className={`fixed inset-0 bg-[#FEC30D] z-50 flex flex-col items-center justify-center text-center px-4 
        animate__animated ${hidePreload ? 'animate__fadeOut' : 'animate__fadeIn'}`}
      >
        <div className="bg-white p-4 rounded-full w-32 h-32 flex items-center justify-center animate__animated animate__fadeInDown">
          <img src={img} className="w-[85%]" alt="" />
        </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-black mt-4 animate__animated animate__fadeInDown">
            Welcome to Gega Bite
          </h1>
      </div>
    );
  }

  return (
    showAppContent && (
      <div className="animate__animated animate__fadeIn">
        <Routes>
          <Route element={<RequireBack />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/" element={<Website />}>
            <Route path="/" element={<Landing />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="categries" element={<CategoriesShow />} />
              <Route path="addcategory" element={<AddCategories />} />
              <Route path="updatecategory/:id" element={<EditCategory />} />
              <Route path="viewfoods" element={<ViewFoods />} />
              <Route path="AddFoodPage" element={<AddFoodPage />} />
              <Route path="EditFoodPage/:id" element={<EditFood />} />
            </Route>
          </Route>

          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>

        {showBtnToTop && <BtnToTop />}
      </div>
    )
  );
};

export default App;
