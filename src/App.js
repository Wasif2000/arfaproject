import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Blog from './Page/Blog.jsx';
import Gallery from './Page/Gallery.jsx'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;