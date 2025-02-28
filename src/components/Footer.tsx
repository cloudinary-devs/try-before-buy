import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ColorVision</h3>
            <p className="text-gray-300">
              Transform your space with confidence using our virtual paint visualizer.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Gallery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-300">Subscribe to our newsletter</p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ColorVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;