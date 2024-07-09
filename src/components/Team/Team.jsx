import Image from "next/image";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
export default function Team() {
  return (
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
      <div className="flex flex-col items-center justify-center px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white my-16">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Meet Our Dedicated Team of Experts
        </h1>
        <p className="text-lg text-center mb-8 max-w-2xl">
          This is our team of designers, developers, and creatives who mastered
          all the experience in the website designing industry.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <figure className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-lg rounded-lg overflow-hidden">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kalyan-g-45391b217/"
              className="block w-full h-full"
            >
              <Image
                src="/images/m2.jpg"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                alt="Team Member 1"
              />

              <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-3">
                <p className="text-lg font-semibold text-gray-200 mb-1">
                  Kalyan Gopu
                </p>
                <p className="text-sm text-gray-300">Founder of Subadha</p>
                <LinkedInIcon className="text-gray-300 inline-block h-5 w-5 mt-1"></LinkedInIcon>
              </figcaption>
            </a>
          </figure>

          <figure className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-lg rounded-lg overflow-hidden">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vignesh-kamatam-a1ba7120a/"
              className="block w-full h-full"
            >
              <Image
                src="/images/m4.png"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                alt="Team Member 1"
              />

              <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-3">
                <p className="text-lg font-semibold text-gray-200 mb-1">
                  Vignesh
                </p>
                <p className="text-sm text-gray-300">Web Developer</p>
                <LinkedInIcon className="text-gray-300 inline-block h-5 w-5 mt-1"></LinkedInIcon>
              </figcaption>
            </a>
          </figure>

          <figure className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-lg rounded-lg overflow-hidden">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nithin-kumar-elamshetty/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="block w-full h-full"
            >
              <Image
                src="/images/m3.jpg"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                alt="Team Member 1"
              />

              <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-3">
                <p className="text-lg font-semibold text-gray-200 mb-1">
                  Nithin Kumar
                </p>
                <p className="text-sm text-gray-300">Web Designer</p>
                <LinkedInIcon className="text-gray-300 inline-block h-5 w-5 mt-1"></LinkedInIcon>
              </figcaption>
            </a>
          </figure>

          <figure className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-lg rounded-lg overflow-hidden">
            <a
              target="_blank"
              href="https://raghav129.github.io/myportfolio/"
              className="block w-full h-full"
            >
              <Image
                src="/images/m1.jpg"
                width={256}
                height={256}
                className="object-cover w-full h-full"
                alt="Team Member 1"
              />

              <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-3">
                <p className="text-lg font-semibold text-gray-200 mb-1">
                  Raghavendra
                </p>
                <p className="text-sm text-gray-300">Client Manager</p>
                <LinkedInIcon className="text-gray-300 inline-block h-5 w-5 mt-1"></LinkedInIcon>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
    </motion.div>
  );
}
