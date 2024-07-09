import React from "react";

function Clientform() {
  return (
    <main>
      <h2 className="text-5xl font-bold text-center mb-8 text-white">
        Clinet Request
      </h2>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
    </main>
  );
}

export default Clientform;
