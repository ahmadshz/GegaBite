
const Footer = () => {
  return (
    <footer className={`py-12  bg-gray-100 text-gray-700 dark:bg-[#282828] dark:text-white`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <div className={`text-4xl font-bold  `}>
              <span >Gega</span>
              <span className="text-[#FFF001] " >BITE</span>
            </div>
            <p className="mt-2 text-sm">Your favorite dining experience</p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:flex gap-8 mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>
          </div>

          {/* Dark Mode Toggle */}
         
        </div>

        {/* Divider */}
        <div className={`my-8 border-t  border-gray-200 `}></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} SIT&BITE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;