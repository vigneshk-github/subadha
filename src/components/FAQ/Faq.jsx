"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "How do I update my billing information?",
    answer:
      "To update your billing information, please contact customer support through the available channels on the website or platform.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      'To contact customer support, look for a "Contact us" or "Help" button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.',
  },
  {
    question: "How do I update my profile information?",
    answer:
      "To update your profile information, please follow the instructions provided on the website or platform. If you need further assistance, contact customer support.",
  },
  {
    question: "How do I find my purchase history?",
    answer:
      "To find your purchase history, navigate to the appropriate section on the website or platform. If you encounter any issues, contact customer support for assistance.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
              FAQs
            </h6>
            <h2 className="text-4xl font-manrope text-center font-bold text-white leading-[3.25rem]">
              Frequently asked questions
            </h2>
          </div>

          <div className="accordion-group" data-accordion="default-accordion">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${
                  activeIndex === index ? "bg-black" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="accordion-toggle group inline-flex items-center justify-between leading-8 text-white w-full transition duration-500 text-left">
                  <h3 className="text-2xl">{item.question}</h3>
                  <svg
                    className={`text-gray-500 transition duration-500 ${
                      activeIndex === index ? "text-white rotate-180" : ""
                    }`}
                    width="42"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  id={`accordion-content-${index}`}
                  className="accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out"
                  style={{ maxHeight: activeIndex === index ? "250px" : "0px" }}
                  aria-labelledby={`accordion-item-${index}`}
                >
                  <p className="text-base text-white leading-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Faq;
