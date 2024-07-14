"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <main
      id="service"
      className="dark:text-white dark:bg-black text-black bg-white pt-30 mt-20 sm:py-12 px-4 sm:px-6 sm:mt-[-80px]"
    >
      <h1 className="text-5xl text-center my-12 font-extrabold  sm:text-7xl tracking-tight">
        Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-8xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <div className=" px-1 py-1 mx-auto max-w-screen-xl flex items-center justify-center lg:py-16 lg:px-6">
            <a
              href="#"
              className="bg-black text-white mx-auto max-w-screen-md flex items-center justify-center flex-col w-full p-8 w-100 sm:p-16 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="sm:mb-4 text-2xl pb-10 sm:text-4xl font-bold tracking-tight ">
                Web Development
              </h5>
              <p className="flex justify-center text-center items-center font-normal text-xl px-4 py-4">
                As a team, we specialize in transforming design concepts into
                fully functional websites, developing premium themes, creating
                sophisticated animations, and writing custom code to meet
                specific client requirements.
              </p>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <div className="px-1 py-1 mx-auto max-w-screen-xl flex items-center justify-center lg:py-16 lg:px-6">
            <a
              href="#"
              className="bg-black text-white mx-auto max-w-screen-md flex items-center justify-center flex-col w-full p-8 w-100 sm:p-16 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="sm:mb-4 text-2xl pb-10 sm:text-4xl font-bold tracking-tight">
                App Development
              </h5>
              <p className="flex justify-center text-center items-center font-normal text-xl px-4 py-4">
                As a team, we excel in transforming design concepts into fully
                functional mobile applications, developing premium app themes,
                integrating advanced animations, and writing custom code to meet
                specific client requirements.
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
