import React from 'react'
import Navabr from '../components/Landing/Navabr'
import SearchBar from '../components/Landing/SearchBar'
import CategoriesTabs from '../components/Landing/CategoriesTabs'
import RecipeList from '../components/Landing/RecipeList'

const Landing = () => {
  return (
    <div className=' min-h-screen py-5 lg:py-10 dark:text-white dark:bg-black' >
      <Navabr />
      <SearchBar />
      <CategoriesTabs />
      <RecipeList />
    </div>
  )
}

export default Landing
