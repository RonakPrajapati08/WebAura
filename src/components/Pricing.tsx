import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '2,499',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO optimization',
      'Contact form integration',
      'Social media links',
      '30 days support',
      '2 rounds of revisions'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '4,999',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 15 pages',
      'Custom design & branding',
      'Advanced SEO optimization',
      'CMS integration',
      'E-commerce (up to 50 products)',
      'Blog functionality',
      'Analytics setup',
      '90 days support',
      '4 rounds of revisions'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale projects and corporations',
    features: [
      'Unlimited pages',
      'Premium custom design',
      'Full SEO & marketing suite',
      'Advanced e-commerce',
      'Custom integrations',
      'API development',
      'Priority support',
      '1 year maintenance',
      'Unlimited revisions',
      'Dedicated project manager'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl scale-105 border-4 border-blue-400'
                  : 'bg-gray-50 border border-gray-200'
              } transition-all hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="bg-white text-blue-600 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              <div className="mb-4">
                {plan.price === 'Custom' ? (
                  <div className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    Contact Us
                  </div>
                ) : (
                  <>
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      /project
                    </span>
                  </>
                )}
              </div>

              <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:shadow-lg hover:scale-105'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-4">
            Every business is unique. Let's discuss your specific needs and create a tailored package that fits your budget and goals.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
