import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const SAPHero = () => {
  const services = [
    { id: 1, name: 'SAP Implementation', icon: '🚀' },
    { id: 2, name: 'SAP Roll out', icon: '🔄' },
    { id: 3, name: 'SAP Support', icon: '🔗' },
    { id: 4, name: 'SAP Upgrade', icon: '💡' },
    { id: 5, name: 'SAP Integration', icon: '🛠️' },
    { id: 6, name: 'SAP Migration', icon: '📚' },
    { id: 7, name: 'SAP Automation', icon: '⚡' },
    { id: 8, name: 'SAP Testing', icon: '🔒' },
  ];

  return (
    <section className="relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-600">Trusted SAP Partner</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Expert SAP Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From implementation to optimization, we deliver all 8 essential SAP services 
                to drive your digital transformation and unlock your business potential.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/30 transform hover:scale-105 hover:-translate-y-1"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 border border-gray-300 hover:border-red-400 shadow hover:shadow-md transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">15+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">98%</div>
                <div className="text-sm text-gray-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-red-500/20 blur-3xl" />
            
            <div className="relative grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:bg-red-50 hover:border-red-300 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-400/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SAPHero;