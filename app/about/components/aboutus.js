import React from 'react';
import Image from 'next/image';

const OurMissionSection = () => {
  return (
    <div className="text-white min-h-*">
      {/* Our Mission & How We Work */}
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 pb-4 min-h-*" >
          {/* Our Mission */}
          <div>
            <h2 className="text-4xl font-bold mb-4 pb-2">Our Mission</h2>
            <p className="text-red-600 text-lg mb-6">
              We Provide Software Testing Solutions which Exceed Client Expectations
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We automate and optimize your business processes and provide 100% quality to your organization by 
              delivering stable and innovative solutions, with high-level expertise and comprehensive spirit.
            </p>
            <div className="flex space-x-4">
              
              <button className="border border-gray-500 hover:border-gray-400 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* How We Work */}
          <div>
            <h2 className="text-4xl font-bold mb-6 pt-10">How We Work</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether you are a Fortune 500 company looking for testing solutions or a start-up evaluating the 
              status quo, we provide our clients end-to-end software testing solutions. CRIT provides clients a 
              vital pool of QA experts at a cost-ready risk. This means cost-effective from premium support.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our methodology, tools, frameworks and ISTQB-certified QA experts are here to work for a 
              fraction of the cost. We have in-depth knowledge of functional and non-functional testing 
              merged with tech trends application and cloud technology.
            </p>
            
          </div>
        </div>
      </div>

      {/* Our Expertise Section - Responsive and No Overflow */}
      <div
        className="relative w-full bg-no-repeat bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,22,36,0.7),rgba(10,22,36,0.7)), url('https://res.cloudinary.com/dujw4np0d/image/upload/v1751703287/image_2_qzxt24.png')",
        }}
      >
        <div className="pt-16 pb-18 px-2 sm:px-4 md:px-10 w-full flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-8 sm:mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl">
            <div className="bg-[#18304b]/90 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-[#2a4060] hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Domain Knowledge</h3>
              <p className="text-sm sm:text-base text-slate-200">
                Our technical expertise and domain knowledge helps to deliver transformational results. CRIT testing services are conceptualized to reduce QA costs and increase time-to-market.
              </p>
            </div>
            <div className="bg-[#18304b]/90 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-[#2a4060] hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Customer-Centric Approach</h3>
              <p className="text-sm sm:text-base text-slate-200">
                We follow a collegial environment driven by expert thinking, unwavering dedication and robust skills to help our clients provide an agile and collaborative approach.
              </p>
            </div>
            <div className="bg-[#18304b]/90 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-[#2a4060] hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">A Focus on Results</h3>
              <p className="text-sm sm:text-base text-slate-200">
                We offer a myriad of services from test automation, cloud migration, performance engineering to test data management; our clients benefit from the latest technologies to meet their business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;
 