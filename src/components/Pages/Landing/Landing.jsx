import React from 'react'
import Navabr from './Navabr'
import SearchBar from './SearchBar'
import CategoriesTabs from './CategoriesTabs'
import RecipeList from './RecipeList'

import Footer from './Footer'
import Contact from '../../../Pages/Website/Contact'
import Location from '../../../Pages/Website/Location'

const Landing = () => {
  return (
    <div className=' min-h-screen pb-5 md:py-0 md:pt-0 dark:text-white dark:bg-black ' >
      <Navabr />
      <SearchBar />
      <CategoriesTabs />
      <RecipeList />
      <div className='hidden md:block mt-28 lg:mt-44'>
        <Location />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Landing
