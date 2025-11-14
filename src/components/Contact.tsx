import { Mail, Phone, MapPin, Send, MessageCircle, ChevronsUpDownIcon, CheckIcon } from 'lucide-react';
import { useState } from 'react';
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const services = [
  { id: 0, name: "Select a Service", value: "" },
  { id: 1, name: "Website Design", value: "website-design" },
  { id: 2, name: "Web Development", value: "web-development" },
  { id: 3, name: "E-Commerce", value: "ecommerce" },
  { id: 4, name: "SEO Optimization", value: "seo" },
  // { id: 5, name: "Mobile Development", value: "mobile" },
  { id: 6, name: "Website Maintenance", value: "maintenance" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [selected, setSelected] = useState(services[0]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let’s Build Something Amazing Together</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Our team is here to turn your vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {/* We'd love to hear about your project. Fill out the form and we'll get back to you within 24 hours. */}
              We’d love to understand your project. Share a few details and our experts will get back to you within 12–24 hours.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email Us</div>
                  <a
                    href="mailto:webaura@gmail.com"
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    webaura@gmail.com
                  </a>
                  <p className='text-sm text-gray-400'>Let’s discuss your idea, ask questions, or get a custom quote.</p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Call Us</div>
                  <a
                    href="tel:+917567074348"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +91 75670 74348
                  </a>
                  <p className='text-sm text-gray-400'>Talk directly with our project consultant.</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/917567074348"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    +91 75670 74348
                  </a>
                  <p className='text-sm text-gray-400'>Quick replies | Fast quotes | Instant updates</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Visit Us</div>
                  <div className="text-gray-600">
                    WebAura – Creative Digital Studio<br />
                    Ahmedabad, Gujarat India
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Free 30-Minute Website Consultation</h4>
              <p className="text-blue-100 text-sm text-justify">
                Book a free 30-minute session with our web experts to discuss your project, explore solutions, and get actionable advice tailored to grow your business online.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="enter your phone number"
                  />
                </div>

                <div className="w-full max-w-sm mx-auto">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Label className="block text-sm font-semibold text-gray-900 mb-2">
                        Service Needed *
                      </Listbox.Label>
                      <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white border border-gray-300 py-3 pl-4 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-sm transition-all">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          <ChevronsUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {services.map((service) => (
                            <Listbox.Option
                              key={service.id}
                              className={({ active }) =>
                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                                }`
                              }
                              value={service}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                    {service.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
