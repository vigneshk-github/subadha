import Image from "next/image";

export default function Team() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white my-16">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Meet Our Dedicated Team of Experts
      </h1>
      <p className="text-lg text-center mb-8 max-w-2xl">
        This is our team of designers, developers, and creatives who mastered
        all the experience in the website designing industry.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        <figure className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <Image
              width={256}
              height={256}
              className="rounded-lg object-cover w-full h-full"
              src="/images/m1.jpg"
              alt="Team Member 1"
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p className="bg-black bg-opacity-50 rounded-lg p-2">
              Team Member 1
            </p>
          </figcaption>
        </figure>

        <figure className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <Image
              width={256}
              height={256}
              className="rounded-lg object-cover w-full h-full"
              src="/images/m2.jpg"
              alt="Team Member 2"
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p className="bg-black bg-opacity-50 rounded-lg p-2">
              Team Member 2
            </p>
          </figcaption>
        </figure>

        <figure className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <Image
              width={256}
              height={256}
              className="rounded-lg object-cover w-full h-full"
              src="/images/m3.jpg"
              alt="Team Member 3"
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p className="bg-black bg-opacity-50 rounded-lg p-2">
              Team Member 3
            </p>
          </figcaption>
        </figure>

        <figure className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <Image
              width={256}
              height={256}
              className="rounded-lg object-cover w-full h-full"
              src="/images/m4.png"
              alt="Team Member 4"
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">
            <p className="bg-black bg-opacity-50 rounded-lg p-2">
              Team Member 4
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
