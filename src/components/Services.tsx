import { Code, Palette, ShoppingCart, TrendingUp, Smartphone, Zap } from 'lucide-react';

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
  return (
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
  );
}
