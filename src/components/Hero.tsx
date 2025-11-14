// import { ArrowRight, CheckCircle, Code2 } from 'lucide-react';

// export default function Hero() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 to-emerald-50">
//       <div className="container mx-auto">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
//             <Code2 size={16} />
//             <span>Professional Web Development Services</span>
//           </div>

//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
//             Building Digital Experiences That <span className="text-blue-600">Drive Results</span>
//           </h1>

//           <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
//             We design and develop powerful, SEO-optimized websites that help <span className='text-blue-500'>your business grow and attract customers online.</span>
//             WebAura is a trusted website development agency delivering modern, scalable, and growth-focused web solutions that turn your digital presence into real business success.
//           </p>

//           <div className="space-y-3 mb-8">
//             <div className="flex items-center space-x-3">
//               <CheckCircle className="w-5 h-5 text-green-500" />
//               <span className="text-gray-700">
//                 Custom-built websites that reflect your brand and business goals
//               </span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <CheckCircle className="w-5 h-5 text-green-500" />
//               <span className="text-gray-700">
//                 Fully responsive, fast-loading, and mobile-friendly design
//               </span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <CheckCircle className="w-5 h-5 text-green-500" />
//               <span className="text-gray-700">
//                 SEO-optimized structure to drive traffic and boost online visibility
//               </span>
//             </div>
//           </div>


//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2 group"
//             >
//               <span className="font-semibold">Start Your Project</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button
//               onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
//               className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold"
//             >
//               View Our Work
//             </button>
//             {/* <buttox */}
//           </div>

//           <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
//             <div>
//               <div className="text-3xl font-bold text-slate-900">50+</div>
//               <div className="text-slate-600 text-sm mt-1">Projects Completed</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-slate-900">98%</div>
//               <div className="text-slate-600 text-sm mt-1">Client Satisfaction</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-slate-900">24/7</div>
//               <div className="text-slate-600 text-sm mt-1">Support Available</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


//seccond with check content
import { useState } from "react";
import { ArrowRight, CheckCircle, Code2 } from "lucide-react";
import ProjectModal from "./modelform/ProjectModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Code2 size={16} />
            <span>Professional Web Development Services</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Building Digital Experiences That{" "}
            <span className="text-blue-600">Drive Results</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We design and develop powerful, SEO-optimized websites that help{" "}
            <span className="text-blue-500">
              your business grow and attract customers online.
            </span>{" "}
            WebAura is a trusted website development agency delivering modern,
            scalable, and growth-focused web solutions that turn your digital
            presence into real business success.
          </p>

          {/* Feature List */}
          <div className="flex flex-col items-start sm:items-center gap-3 mb-12 max-w-2xl mx-auto text-left sm:text-center">
            {[
              "Custom-built websites that reflect your brand and business goals",
              "Fully responsive, fast-loading, and mobile-friendly design",
              "SEO-optimized structure to drive traffic and boost online visibility",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start sm:justify-center gap-3 text-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2 group"
            >
              <span className="font-semibold">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold"
            >
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "5+", label: "Industries Served" },
              { number: "24/7", label: "Support Available" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-slate-900">
                  {item.number}
                </div>
                <div className="text-slate-600 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smooth Animated Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
}
