import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../images/webaura.png';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center"> */}
              <div className="flex items-center justify-center p-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-40 h-auto object-contain "
                />
              </div>
              {/* </div> */}
            </button>

          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact Us</button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Testimonials</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">About</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">Contact Us</button>
          </div>
        )}
      </nav>
    </header>
  );
}
