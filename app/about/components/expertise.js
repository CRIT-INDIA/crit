import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./card"


export default function AiInsightsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="container px-4 md:px-6 flex flex-col items-center">
        <h2 className="text-3xl font-sans-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-gray-900 mb-12">
        Our Expertise
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            
            <Card className="rounded-full shadow-3xl border border-red-500 bg-white p-2">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Domain Knowledge
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-gray-700 text-base">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Expertise That Delivers:</strong> Our skilled QA team combines technical excellence with industry-specific knowledge to drive quality and efficiency.</li>
                  <li><strong>Domain-Focused Approach:</strong> We understand your business and customize our testing strategies accordingly.</li>
                  <li><strong>Comprehensive QA Solutions:</strong> From functional and performance testing to mobile and security testing, we cover the full QA lifecycle.</li>
                </ul>
              </CardContent>
            </Card>
            <div className="pl-10">
            <img
              src="https://res.cloudinary.com/duz9xipfm/image/upload/v1751344095/image_3_jfnwiv.jpg"
              alt="Domain Knowledge Illustration"
              className="w-full max-w-sm h-64 object-cover rounded-lg shadow-3xl border border-gray-200"
            />
            <div className="w-full mt-10 max-w-sm h-42 bg-gradient-to-t from-[#fff5f5] to-red-200 rounded-t-3xl"></div>

            
            </div>
            
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-8 items-center justify-center lg:mt-04 p-2">
          <div className="w-full max-w-sm h-32 bg-gradient-to-b from-[#fff5f5] to-red-200 rounded-b-3xl"></div>
            
            
                      <Card className="rounded-2xl shadow-3xl border-0 bg-gradient-to-br from-red-500 to-red-600 p-6 text-white w-full max-w-sm h-64 flex items-center justify-center">
              <CardContent className="p-5 text-center">
                <div className="text-5xl font-bold mb-3">75%</div>
                <div className="text-sm leading-relaxed">
                  of the services are available with us.
                  </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-full shadow-3xl border border-gray-200 bg-white p-2">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Customer-Centric Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-gray-700 text-base">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Expert Thinking:</strong> Our team brings deep technical knowledge and innovative problem-solving to every project.</li>
                  <li><strong>Unwavering Dedication:</strong> We are fully committed to delivering excellence, meeting client expectations with consistency.</li>
                  <li><strong>Robust Skillset:</strong> With a strong foundation in technology and QA practices, we ensure reliable and scalable solutions.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
          <Card className="rounded-full shadow-3xl border border-gray-200 bg-white">
              <CardHeader className="p-6 pb-4">
                <CardTitle className="text-xl font-bold text-gray-800">
                  A Focus on Results
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-gray-700 text-base">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Test Automation:</strong> Streamline testing processes and improve coverage with robust automation frameworks.</li>
                  <li><strong>Cloud Migration Testing:</strong> Ensure seamless transitions to the cloud with comprehensive validation and compatibility checks.</li>
                  <li><strong>Performance Engineering:</strong> Optimize application speed, scalability, and reliability through proactive performance testing.</li>
                </ul>
              </CardContent>
            </Card>
            <div className="pl-10">
              <img
                src="https://res.cloudinary.com/dujw4np0d/image/upload/v1751703287/image_2_qzxt24.png"
                alt="Team Collaboration"
                className="w-full max-w-sm h-64 object-cover rounded-lg shadow-3xl border border-gray-200"
              />
            </div>
            <div className="w-full ml-10 mt-5 max-w-sm h-42 bg-gradient-to-t from-[#fff5f5] to-red-200 rounded-t-3xl"></div>

          </div>
        </div>
      </div>
    </section>
  )
}
