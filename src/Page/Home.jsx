import React from 'react';
import { Link } from 'react-router-dom';
import pp from '../images/download.jfif'
// Sample image data - replace with your actual images
const galleryImages = [
  { id: 1, src: 'https://preview.colorlib.com/theme/alime/img/bg-img/5.jpg', alt: 'Nature' },
  { id: 2, src: 'https://preview.colorlib.com/theme/alime/img/bg-img/6.jpg', alt: 'City' },
  { id: 3, src: 'https://preview.colorlib.com/theme/alime/img/bg-img/9.jpg', alt: 'Technology' },
  { id: 4, src: 'https://preview.colorlib.com/theme/alime/img/bg-img/36.jpg', alt: 'Food' },
  { id: 5, src: 'https://preview.colorlib.com/theme/alime/img/bg-img/37.jpg', alt: 'Travel' },
  { id: 6, src: 'https://preview.colorlib.com/theme/alime/img/bg-img/8.jpg', alt: 'Architecture' },
  { id: 7, src: 'https://preview.colorlib.com/theme/alime/img/bg-img/16.jpg', alt: 'Art' },
  { id: 8, src: 'https://preview.colorlib.com/theme/alime/img/bg-img/14.jpg', alt: 'Fashion' },
  { id: 9, src: 'https://preview.colorlib.com/theme/alime/img/bg-img/11.jpg', alt: 'Business' },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Full-screen Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pp}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Welcome to Our Creative Space
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover amazing content, stunning visuals, and inspiring stories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/blog"
              className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-200 transition duration-300 font-medium"
            >
              Explore Blog
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition duration-300 font-medium"
            >
              About Us
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-white text-xl font-bold">{image.alt}</h3>
                  <button className="mt-2 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-200 transition">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of satisfied users who have already discovered our amazing content and services.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;