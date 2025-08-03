import React from 'react'

function Contact() {

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Contact Us</h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="px-4 py-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="px-4 py-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="px-4 py-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          required
          className="px-4 py-3 rounded-md border border-gray-300 text-base resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
;


}

export default Contact