// ContactUs.tsx
"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (form.current) {
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
    }
  };

  return (
    <main
      id="contact"
      className="font-body dark:text-white dark:bg-black text-black bg-white  py-[100px]"
    >
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
        className="max-w-5xl mx-auto p-6"
      >
        <h2 className="sm:text-6xl text-5xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex w-full flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex flex-col mb-8 md:mb-0 w-full text-center md:text-left">
            <h3 className="text-3xl mb-4">Still have any questions?</h3>
            <p className="mb-4 text-xl">
              Book a consultation with our expert team to kickstart your
              project.
            </p>
            <p className="mb-4 text-xl">
              Let&apos;s collaborate to craft a stunning digital solution
              tailored just for you.
            </p>
          </div>
          <div className="max-w-md md:max-w-xl w-full mx-auto">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
                  required
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
                  required
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
                  rows={5}
                  placeholder="Your Message"
                  required
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
                    message.includes("FAILED")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default ContactUs;
