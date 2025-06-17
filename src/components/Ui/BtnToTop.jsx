import { useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const BtnToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      onClick={goToTop}
      className={`fixed bottom-[85px] md:bottom-7 right-5 bg-gray-100 dark:bg-[#212121] p-3 rotate-45 rounded-sm cursor-pointer 
        shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] 
        transition-opacity duration-500 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <MdKeyboardDoubleArrowUp className='-rotate-45 text-[20px] md:text-[30px] dark:text-white'   />
    </div>
  );
};

export default BtnToTop;
