export default function Timeline() {
  return (
    <>
      <h1 className="text-white text-5xl font-bold flex items-center justify-center my-20">
        Our Proven Process for Website Results
      </h1>
      <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto mb-30">
        Explore our step-by-step process of showcasing innovative designs and
        successful solutions. Each project reflects our commitment to
        creativity, functionality, and client satisfaction.
      </p>
      <div className="relative">
        <div className="border-l-4 absolute h-full left-1/2 transform -translate-x-1/2"></div>
        <ul className="text-black list-none p-0 m-10 relative">
          <li className=" mb-10 relative">
            <div className=" timeline-start timeline-box bg-white border border-gray-200 rounded-lg p-6 w-4/5 mx-auto relative shadow-md">
              <h2 className="text-xl font-bold mb-3">
                Initial Consultation and Discovery
              </h2>
              <p className="text-black">
                We begin by understanding your business goals, target audience,
                and specific requirements. This helps us tailor our approach to
                best meet your needs.
              </p>
            </div>
            <div className="timeline-dot bg-blue-500"></div>
          </li>
          <li className="mb-10 relative">
            <div className="timeline-end timeline-box bg-white border border-gray-200 rounded-lg p-6 w-4/5 mx-auto relative shadow-md">
              <h2 className="text-xl font-bold mb-3">Research and Planning</h2>
              <p className="text-gray-800">
                Our team conducts thorough research on your industry,
                competitors, and market trends. We then develop a detailed
                project plan and strategy to ensure we are aligned with your
                vision.
              </p>
            </div>
            <div className="timeline-dot bg-blue-500"></div>
          </li>
          <li className="mb-10 relative">
            <div className="timeline-start timeline-box bg-white border border-gray-200 rounded-lg p-6 w-4/5 mx-auto relative shadow-md">
              <h2 className="text-xl font-bold mb-3">Website Mock-Up</h2>
              <p className="text-gray-800">
                We create wireframes and design mock-ups that visually represent
                the structure and layout of your new website. This gives you a
                clear idea of the user experience and design direction.
              </p>
            </div>
            <div className="timeline-dot bg-blue-500"></div>
          </li>
          <li className="mb-10 relative">
            <div className="timeline-end timeline-box bg-white border border-gray-200 rounded-lg p-6 w-4/5 mx-auto relative shadow-md">
              <h2 className="text-xl font-bold mb-3">Design and Development</h2>
              <p className="text-gray-800">
                Our designers and developers work collaboratively to bring the
                mock-up to life. We focus on creating a responsive,
                aesthetically pleasing, and functional website that meets your
                specifications.
              </p>
            </div>
            <div className="timeline-dot bg-blue-500"></div>
          </li>
          <li className="relative">
            <div className="timeline-start timeline-box bg-white border border-gray-200 rounded-lg p-6 w-4/5 mx-auto relative shadow-md">
              <h2 className="text-xl font-bold mb-3">Review and Feedback</h2>
              <p className="text-gray-800">
                Once the initial design and development phase is complete, we
                present the website to you for review. We gather your feedback
                and make any necessary adjustments to ensure the final product
                aligns with your expectations.
              </p>
            </div>
            <div className="timeline-dot bg-blue-500"></div>
          </li>
        </ul>
      </div>
    </>
  );
}
