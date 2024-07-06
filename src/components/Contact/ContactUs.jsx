import React from "react";

function ContactUs() {
  return (
    <main>
      <h2 className="text-5xl font-bold text-center mb-8 text-white">
        Contact Us
      </h2>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-center">
        <div className="max-w-md md:mr-8 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl mb-4">Still have any questions?</h2>
          <p className="mb-4">
            Book a consultation with our expert team to kickstart your project.
          </p>
          <p className="mb-4">
            Let&apos;s collaborate to craft a stunning digital solution tailored
            just for you.
          </p>
        </div>
        <div className="max-w-md md:max-w-xl mx-auto">
          <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-white text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="text-center md:text-left">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
