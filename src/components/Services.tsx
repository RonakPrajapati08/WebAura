import { Code, Palette, ShoppingCart, TrendingUp, Smartphone, Zap } from 'lucide-react';
import marketing from '../images/7578209.png';
import { useState } from 'react';
import ProjectModal from './modelform/ProjectModal';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description: 'Beautiful, user-centric designs that captivate your audience and reflect your brand identity.',
    features: ['Custom UI/UX', 'Responsive Layouts', 'Brand Integration']
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Robust, scalable websites built with cutting-edge technologies for optimal performance.',
    features: ['Modern Frameworks', 'Clean Code', 'Fast Loading']
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online store solutions that drive sales and provide seamless shopping experiences.',
    features: ['Payment Integration', 'Inventory Management', 'Analytics']
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Get found by your customers with strategic SEO that improves rankings and drives traffic.',
    features: ['Keyword Research', 'On-Page SEO', 'Performance Tracking']
  },
  // {
  //   icon: Smartphone,
  //   title: 'Mobile Development',
  //   description: 'Native and progressive web apps that deliver exceptional mobile experiences.',
  //   features: ['Cross-Platform', 'App Store Ready', 'Push Notifications']
  // },
  {
    icon: Zap,
    title: 'Website Maintenance',
    description: 'Ongoing support and updates to keep your website secure, fast, and running smoothly.',
    features: ['Security Updates', '24/7 Support', 'Performance Monitoring']
  }
];

export default function Services() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business thrive online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 md:px-16 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Transform Your Business
              <br />
              <span className="text-blue-200">Digitally & Intelligently</span>
            </h1>

            <h3 className="mt-6 text-xl font-semibold text-blue-100">
              Build a Future-Ready Web Presence
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-blue-100">
              Your customers expect fast, beautiful, and user-friendly digital
              experiences. We turn your ideas into powerful web solutions with
              clean design, smooth animations, and high-performance development.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-blue-100">
              From modern websites to fully automated experiences — we help your
              business stand out online, attract more customers, and convert more
              leads. Because great design is not just seen, it's remembered.
            </p>

            <button onClick={openModal} className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-100 transition">
              Get a Free Website Consultation
            </button>
          </div>

          {/* RIGHT ILLUSTRATION / ANIMATION AREA */}
          <div className="flex justify-center animate-slideUp">
            <img
              src={marketing}
              alt="Web Development Illustration"
              className="md:w-full drop-shadow-2xl"
            />
          </div>

        </div>
      </section>
      {/* Smooth Animated Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
