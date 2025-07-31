import React from 'react';

const About = () => {
  return (
    <div className="text-gray-600 body-font">
      {/* Hero Section */}
      <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Our Company
            <br className="hidden lg:inline-block" /> Crafting Digital Excellence
          </h1>
          <p className="mb-8 leading-relaxed">
            We are a team of passionate designers and developers dedicated to creating exceptional digital experiences. 
            Since our founding in 2015, we've helped over 200 clients transform their ideas into successful web solutions. 
            Our approach combines cutting-edge technology with user-centered design principles.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Our Services
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Meet the Team
            </button>
          </div>
        </div>
        
        {/* Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img 
            className="object-cover object-center rounded" 
            alt="Team working together" 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80" 
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">200+</h2>
                <p className="leading-relaxed">Happy Clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">500+</h2>
                <p className="leading-relaxed">Projects Completed</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">15+</h2>
                <p className="leading-relaxed">Team Members</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">8</h2>
                <p className="leading-relaxed">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">OUR MISSION</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Why We Do What We Do</h1>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Innovation</h2>
              <p className="leading-relaxed text-base mb-4">
                We push boundaries to deliver solutions that set our clients apart in their industries.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Quality</h2>
              <p className="leading-relaxed text-base mb-4">
                Every project receives the same level of attention to detail and commitment to excellence.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Collaboration</h2>
              <p className="leading-relaxed text-base mb-4">
                We work with our clients, not just for them, to achieve shared success.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Impact</h2>
              <p className="leading-relaxed text-base mb-4">
                We measure our success by the tangible results we deliver to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;