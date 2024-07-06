export default function Services() {
  return (
    <main
      id="service"
      className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-center text-gray-900 dark:text-white my-12 font-extrabold text-4xl lg:text-5xl tracking-tight">
        SERVICES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-7xl">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Web Development
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              As a team, we specialize in transforming design concepts into
              fully functional websites, developing premium themes, creating
              sophisticated animations, and writing custom code to meet specific
              client requirements.
            </p>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              App Development
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              As a team, we excel in transforming design concepts into fully
              functional mobile applications, developing premium app themes,
              integrating advanced animations, and writing custom code to meet
              specific client requirements.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
