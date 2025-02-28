import React from 'react';
import { ShoppingCart, PaintBucket, Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <PaintBucket className="h-8 w-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">ColorVision</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
            <Home className="h-5 w-5 mr-1" />
            <span>Home</span>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Shop</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Gallery</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2">
            <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-indigo-600" />
            <span className="absolute top-0 right-0 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;