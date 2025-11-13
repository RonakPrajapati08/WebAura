import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import logo from '../images/webaura.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2 mb-8">
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex items-center justify-center p-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-40 h-auto object-contain "
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 text-justify">
              Empowering businesses with modern, SEO-optimized web solutions. WebAura is a professional website development agency creating fast, user-friendly, and growth-driven websites since 2024.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="p-4 text-center">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Mobile Development</a></li>
            </ul>
          </div>

          <div className="p-4 text-center">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="p-4">
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4 text-justify">
              Subscribe to get the latest web design trends, SEO tips, and digital marketing insights from WebAura - your trusted website development agency.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-blue-600"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors" aria-label='mail'>
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} <span className="font-bold"> WebAura</span>. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
