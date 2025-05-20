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

const App = () => {


  return (
    <div>
      <Routes >
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Website />} >
          <Route path='/' element={<Landing />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='categries' element={<CategoriesShow />} />
          <Route path='addcategory' element={<AddCategories />} />
          <Route path='viewfoods' element={<ViewFoods />} />
          <Route path='AddFoodPage' element={<AddFoodPage />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
