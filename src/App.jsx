import { Route, Routes } from 'react-router-dom'
import Landing from './components/Pages/Landing/Landing'

import Login from './Auth/Login'
import Website from './Pages/Website/Website'
import Contact from './Pages/Website/Contact'
import Location from './Pages/Website/Location'
import Dashboard from './Pages/Dashboard/Dashboard'
import CategoriesShow from './Pages/Dashboard/Categories/CategoriesShow'
import AddCategories from './Pages/Dashboard/Categories/AddCategories'
import ViewFoods from './Pages/Dashboard/Foods/ViewFoods'
import AddFoodPage from './Pages/Dashboard/Foods/AddFoodPage'
import EditCategory from './Pages/Dashboard/Categories/EditCategory'
import EditFood from './Pages/Dashboard/Foods/EditFood'
import RequireAuth from './Auth/RequireAuth'
import RequireBack from './Auth/RequireBack'
import SingleProduct from './Pages/Website/SingleProduct'

const App = () => {



  return (
    <div>
      <Routes >
        <Route element={<RequireBack />}>
          <Route path='/login' element={<Login />} />
        </Route>
        
        <Route path='/' element={<Website />} >
          <Route path='/' element={<Landing />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path='/dashboard' element={<Dashboard />} >
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
  )
}

export default App
