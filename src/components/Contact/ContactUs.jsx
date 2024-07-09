// ContactUs.jsx

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_kjmogyu",
        "template_aofz6l6",
        form.current,
        "9PGmJIUO3qckc9tGr"
      )
      .then(
        () => {
          setLoading(false);
          setMessage("SUCCESS! Your message has been sent.");
        },
        (error) => {
          setLoading(false);
          setMessage(`FAILED... ${error.text}`);
        }
      );
  };

  return (
    <main id="contactus">
      <h2 className="text-5xl font-bold text-center mb-8 text-white">
        Contact Us
      </h2>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col mx-20 max-w-md md:mr-8 mb-8 md:mb-0 text-center md:text-left">
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
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
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
                name="name"
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
                name="email"
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
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="text-center md:text-left">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
            {message && (
              <div
                className={`mt-4 text-center ${
                  message.includes("FAILED") ? "text-red-500" : "text-green-500"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
