import React from 'react'
import Navabr from './Navabr'
import SearchBar from './SearchBar'
import CategoriesTabs from './CategoriesTabs'
import RecipeList from './RecipeList'
import MobileNav from '../../Ui/MobileNav'
import Location from '../../../Pages/Location'

const Landing = () => {
  return (
    <div className=' min-h-screen py-5 lg:py-10 dark:text-white dark:bg-black' >
      <Navabr />
      <SearchBar />
      <CategoriesTabs />
      <RecipeList />
      <div className='hidden md:block mt-44'>
        <Location />
      </div>
    </div>
  )
}

export default Landing
