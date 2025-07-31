import React from 'react';
import hh from '../images/58.jpg.webp'
import hhh from '../images/59.jpg.webp'
import hhhh from '../images/54.jpg.webp'

const Gallery = () => {
  return (
    <div>
      {/* Hero / Gallery Info Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
              cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag
              selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={hh}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {[
              {
                name: 'HOLDEN CAULFIELD',
                role: 'Senior Product Designer',
                image: hhh,
              },
              {
                name: 'ALPER KAMU',
                role: 'UI Developer',
                image: hh,
              },
              {
                name: 'HENRY LETHAM',
                role: 'CTO',
                image: hhhh,
              },
            ].map((person, index) => (
              <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={person.image}
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy
                    90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote
                    bag drinking vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {person.name}
                  </h2>
                  <p className="text-gray-500">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
