import React, { useEffect, useState } from 'react';
import Navabr from './Navabr';
import SearchBar from './SearchBar';
import CategoriesTabs from './CategoriesTabs';
import RecipeList from './RecipeList';
import Footer from './Footer';
import Contact from '../../../Pages/Website/Contact';
import Location from '../../../Pages/Website/Location';

const Landing = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);


  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div className='min-h-screen pb-5 md:py-0 md:pt-0 dark:text-white dark:bg-black'>

      <Navabr toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <SearchBar onSearch={setSearchTerm} />
      <CategoriesTabs
        onCategorySelect={setSelectedCategoryId}
        selectedCategoryId={selectedCategoryId}
      />
      <RecipeList
        searchTerm={searchTerm}
        selectedCategoryId={selectedCategoryId}
        onAutoCategorySelect={setSelectedCategoryId}
      />

      <div className='hidden md:block mt-28 lg:mt-44'>
        <Location />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;