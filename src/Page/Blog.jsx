import React from 'react';
import pic1 from '../images/blog1.jpg'
import pic2 from '../images/52.jpg.webp'
import pic3 from '../images/53.jpg.webp'
import pic4 from '../images/54.jpg.webp'
import pic5 from '../images/55.jpg.webp'
import pic6 from '../images/56.jpg.webp'
import pic7 from '../images/57.jpg.webp'
import pic8 from '../images/58.jpg.webp'
import pic9 from '../images/59.jpg.webp'

// Sample blog data with image paths
const blogPosts = [
  { 
    id: 1,
    title: "React Fundamentals",
    excerpt: "Learn core React concepts",
    bgImage: pic1,
  },
  { 
    id: 2,
    title: "Tailwind CSS",
    excerpt: "Styling modern applications",
    bgImage: pic2,
  },
  { 
    id: 3,
    title: "State Management",
    excerpt: "Managing complex state",
    bgImage: pic3,
  },
  { 
    id: 4,
    title: "Performance Tips",
    excerpt: "Optimizing your apps",
    bgImage: pic4,
  },
  { 
    id: 5,
    title: "Component Patterns",
    excerpt: "Reusable components",
    bgImage: pic5,
  },
  { 
    id: 6,
    title: "API Integration",
    excerpt: "Connecting to backends",
    bgImage: pic6,
  },
  { 
    id: 7,
    title: "Testing Strategies",
    excerpt: "Ensuring quality",
    bgImage: pic7,
  },
  { 
    id: 8,
    title: "Deployment",
    excerpt: "Shipping to production",
    bgImage: pic8,
  },
  { 
    id: 9,
    title: "Best Practices",
    excerpt: "Professional techniques",
    bgImage: pic9,
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${post.bgImage})` }}
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
              
              {/* Content (hidden until hover) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="text-xl font-bold mb-2 text-center">{post.title}</h3>
                <p className="text-center">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;