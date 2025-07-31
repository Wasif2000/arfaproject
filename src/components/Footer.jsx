import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Copyright line with heart icon */}
          <div className="text-gray-500 text-sm mb-2 flex items-center justify-center">
            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with 
            <FaHeart className="mx-1 text-red-500" size={12} /> 
            by <span className="text-red-500 ml-1">Colorlib</span>
          </div>
          
          {/* Brand name with dot and "fey" */}
          <div className="flex items-center">
            <span className="text-gray-700 font-light text-lg mr-1">Alime<span className="text-gray-700">.</span></span>
            <span className="text-gray-400 text-sm">fey</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;