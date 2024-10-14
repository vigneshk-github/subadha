"use client";
import { motion } from "framer-motion";
import React from "react";

const Feature = () => {
  return (
    <main className="font-body dark:text-white dark:bg-black text-black bg-white sm:pt-30 pt-10 sm:py-12 px-5 sm:px-6">
      {/* Section: Header */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Tailored Solutions for Your Business
            </h2>
            <p className="mt-2 w-full text-3xl font-extrabold tracking-tight sm:text-6xl">
              Schedule a Complimentary Consultation
            </p>
            <p className="mt-6 text-lg leading-8">
              Discover our extensive collection of innovative web designs and
              successfully executed projects, each representing our dedication
              to excellence, creativity, and client satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Projects Overview */}
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-6xl">
            Our Projects
          </h2>
          <p className="mt-2 text-lg leading-8">
            8 out of 12 projects delivered with success
          </p>
          <p className="mt-6 text-lg leading-8">
            Explore our extensive portfolio, which highlights our commitment to
            delivering innovative web solutions tailored to meet the specific
            needs of various industries. Our projects reflect not only our
            technical expertise but also our dedication to creating
            user-friendly experiences that drive engagement and conversions.
          </p>
          <p className="mt-6 text-lg leading-8">
            Our client-centric methodology ensures that we understand your
            business goals, enabling us to deliver solutions that not only meet
            but exceed your expectations. We work closely with our clients
            throughout the entire project lifecycle, from initial consultation
            to post-launch support, ensuring your vision is brought to life.
          </p>
        </div>
      </div>

      {/* Section: Why Choose Us */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-center">
            Why Choose Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-center">
            We are committed to delivering exceptional value and service to our
            clients. Here s why you should partner with us:
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Reasons to Choose Us */}
            {[
              {
                title: "Client-Centric Approach",
                description:
                  "We prioritize your needs and goals, ensuring that our solutions are tailored specifically to your business requirements.",
              },
              {
                title: "Expert Team",
                description:
                  "Our team comprises industry experts with diverse skills and experiences, ready to tackle any challenge you face.",
              },
              {
                title: "Innovative Solutions",
                description:
                  "We leverage cutting-edge technologies and creative strategies to deliver unique solutions that stand out in the market.",
              },
              {
                title: "Proven Track Record",
                description:
                  "With numerous successful projects under our belt, our portfolio showcases our ability to deliver results that exceed expectations.",
              },
              {
                title: "Transparent Communication",
                description:
                  "We believe in keeping you informed every step of the way, fostering a collaborative environment for project success.",
              },
              {
                title: "Ongoing Support",
                description:
                  "Our commitment doesn't end at launch. We provide continuous support and maintenance to ensure your success long after the project is completed.",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
                className="flex flex-col justify-between" // Ensure equal height
              >
                <div className="p-6 border rounded-lg shadow-lg bg-black text-white dark:bg-white dark:text-black dark:border-gray-700 flex-1">
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-white dark:text-black">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section: Client Testimonials */}
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-center">
            What Our Clients Say
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial Items */}
            {[
              {
                clientName: "Arjun Rathe",
                testimonial:
                  "The team delivered an exceptional product that exceeded our expectations! Their attention to detail and commitment to our vision made all the difference.",
              },
              {
                clientName: "Mahesh Naidu",
                testimonial:
                  "Working with this company was a fantastic experience. They understood our needs and provided creative solutions that helped us reach our goals.",
              },
              {
                clientName: "Geetha Devi",
                testimonial:
                  "Highly recommend! Their expertise in web design and development transformed our online presence, and we couldn’t be happier with the results.",
              },
              {
                clientName: "Swetha Basu",
                testimonial:
                  "The support and maintenance services provided have been invaluable to our operations. We feel confident knowing we have a dedicated team behind us.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
              >
                <div className="p-6 border rounded-lg shadow-lg bg-black text-white dark:bg-white dark:text-black dark:border-gray-700">
                  <p className="italic text-white dark:text-black">
                    {testimonial.testimonial}
                  </p>
                  <p className="mt-4 font-semibold">{testimonial.clientName}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feature;
