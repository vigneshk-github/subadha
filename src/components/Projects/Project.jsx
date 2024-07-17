import { useState } from "react";

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/p1.png",
    "/images/p2.png",
    "/images/p3.png",
    "/images/p4.png",
    "/images/p5.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white dark:bg-black">
      <div className="text-black dark:text-white -mt-[110px] font-body px-4 mx-auto max-w-screen-md sm:py-4 sm:px-4 flex flex-col sm:pb-[-10px] items-center justify-center">
        <span className="font-semibold mb-20 text-6xl sm:text-7xl">
          Projects
        </span>
        <p className="mb-5 px-4 py-4 font-normal text-center text-2xl sm:text-2xl">
          Explore our diverse portfolio showcasing innovative web solutions
          across various industries, each tailored to meet unique client needs.
        </p>
      </div>
      <div
        id="default-carousel"
        className="relative w-full px-[5%] md:px-[10%] xl:px-[15%]"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-96 md:h-[50vh] lg:h-[60vh] xl:h-[70vh] w-full overflow-hidden rounded-lg">
          {/* Slide items */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
                index === currentSlide ? "" : "hidden"
              }`}
              style={{
                transition: "opacity 0.7s ease-in-out",
                opacity: index === currentSlide ? 1 : 0,
              }}
              data-carousel-item
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute px-[5%] md:px-[10%] xl:px-[15%] z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-1/2 transform -translate-y-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-white rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-1/2 transform -translate-y-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-white rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Project;
