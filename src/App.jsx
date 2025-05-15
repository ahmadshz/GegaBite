import { Route, Routes } from 'react-router-dom'
import Landing from './components/Pages/Landing/Landing'
import Website from './Pages/Website'
import Location from './Pages/Location'
import Contact from './Pages/Contact'

const App = () => {


  return (
    <div>
      <Routes >
        <Route path='/' element={<Website />} >
          <Route path='/' element={<Landing />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
