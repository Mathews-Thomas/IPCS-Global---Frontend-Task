import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="w-full border-b">
    
      <div className="bg-black text-white text-sm text-center py-2">
        <p>
          Sign up and get 20% off to your first order.{' '}
          <span className="underline cursor-pointer">Sign Up Now</span>
        </p>
      </div>

      
      <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
        
        <div className="flex items-center md:hidden">
          <svg
            className="h-6 w-6 text-gray-700 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

    
        <div className="text-3xl font-bold">
          SHOP.CO
        </div>

      
        <ul className="hidden md:flex space-x-6 ml-8">
          <li className="text-gray-700 hover:text-black text-lg cursor-pointer">Shop</li>
          <li className="text-gray-700 hover:text-black text-lg cursor-pointer">On Sale</li>
          <li className="text-gray-700 hover:text-black text-lg cursor-pointer">New Arrivals</li>
          <li className="text-gray-700 hover:text-black text-lg cursor-pointer">Brands</li>
        </ul>

      
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
          <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm7.293-9.707a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L17.293 8.707a1 1 0 010-1.414z" />
          </svg>
          <input
            type="text"
            placeholder="Search for products..."
            className="ml-2 bg-transparent outline-none w-full"
          />
        </div>

        
        <div className="md:hidden flex items-center space-x-4">
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16a4 4 0 100-8 4 4 0 000 8zM21 21l-4.35-4.35" />
          </svg>

          <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 4a1 1 0 00-1 1v2a1 1 0 001 1h1.1l2.133 9.596A2 2 0 008.193 19h7.614a2 2 0 001.96-1.404L20.9 8H22a1 1 0 001-1V5a1 1 0 00-1-1H3zm2 4h14.428l-1.714 7.714a1 1 0 01-.98.743H8.193a1 1 0 01-.98-.743L5.715 8zm7 9a2 2 0 11.001-4.001A2 2 0 0112 17zm-5 0a2 2 0 11.001-4.001A2 2 0 017 17z" />
          </svg>
          
          <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9c0-3.866 3.134-7 7-7s7 3.134 7 7a1 1 0 01-1 1H6a1 1 0 01-1-1z" />
          </svg>
        </div>

       
        <div className="hidden md:flex space-x-6">
          <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 4a1 1 0 00-1 1v2a1 1 0 001 1h1.1l2.133 9.596A2 2 0 008.193 19h7.614a2 2 0 001.96-1.404L20.9 8H22a1 1 0 001-1V5a1 1 0 00-1-1H3zm2 4h14.428l-1.714 7.714a1 1 0 01-.98.743H8.193a1 1 0 01-.98-.743L5.715 8zm7 9a2 2 0 11.001-4.001A2 2 0 0112 17zm-5 0a2 2 0 11.001-4.001A2 2 0 017 17z" />
          </svg>

          <svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9c0-3.866 3.134-7 7-7s7 3.134 7 7a1 1 0 01-1 1H6a1 1 0 01-1-1z" />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
