// Clientform.jsx

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Clientform() {
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
    <main id="contactus" className="bg-white text-black dark:bg-black dark:text-white">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl sm:text-7xl font-bold text-center mb-8">
          Still have any questions ?
        </h2>
        <div className="max-w-lg md:max-w-4xl mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" shadow-md rounded px-8 pt-16 pb-8 mb-0"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-xl font-bold mb-2"
              >
                Your Name, Contact Details (optional), and Email Address
              </label>
              <textarea
                id="contact_details"
                name="contact_details"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                placeholder="Your Name, Contact Details (optional), and Email Address"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="business_name"
                className="block text-xl font-bold mb-2"
              >
                Business Name and Website Link
              </label>
              <textarea
                id="business_name"
                name="business_name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                rows="2"
                placeholder="Business Name and Website Link"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="about_business"
                className="block  text-xl font-bold mb-2"
              >
                About Your Business
              </label>
              <textarea
                id="about_business"
                name="about_business"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                placeholder="About Your Business"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="target_audience"
                className="block  text-xl font-bold mb-2"
              >
                Who is your target audience & Industry?
              </label>
              <textarea
                id="target_audience"
                name="target_audience"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                rows="2"
                placeholder="Who is your target audience & Industry?"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="goals"
                className="block  text-xl font-bold mb-2"
              >
                What are your main goals for your new website?
              </label>
              <textarea
                id="goals"
                name="goals"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                placeholder="What are your main goals for your new website?"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="competitors"
                className="block  text-xl font-bold mb-2"
              >
                Competitors Website Links
              </label>
              <textarea
                id="competitors"
                name="competitors"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                placeholder="Competitors' Website Links"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="website_service"
                className="block  text-xl font-bold mb-2"
              >
                What kind of website service do you want?
              </label>
              <select
                id="website_service"
                name="website_service"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Service website design">
                  Service website design
                </option>
                <option value="Ecommerce website design">
                  Ecommerce website design
                </option>
                <option value="Portfolio">Portfolio</option>
                <option value="Business website">Business website</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="budget"
                className="block text-xl font-bold mb-2"
              >
                What is your estimated budget for this project?
              </label>
              <select
                id="budget"
                name="budget"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Less than 50,000/-">Less than 50,000/-</option>
                <option value="50,000/- to 1,00,000/-">
                  50,000/- to 1,00,000/-
                </option>
                <option value="1,00,000/- to 1,50,000/-">
                  1,00,000/- to 1,50,000/-
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="text-center md:text-left">
              <button
                type="submit"
                className=" font-bold py-2 px-4 rounded bg-black text-white dark:bg-white dark:text-black focus:outline-none focus:shadow-outline"
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
      </motion.div>
    </main>
  );
}

export default Clientform;
