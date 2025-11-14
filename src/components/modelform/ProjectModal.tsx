// import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, X } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-xl overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 sm:px-8 
                bg-gradient-to-r from-blue-100 to-blue-300 
                rounded-t-2xl ">
                <div className="flex items-center space-x-2">
                  <Rocket className="w-6 h-6 text-blue-600" />
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                    Website Consultation Enquiry
                  </h2>
                </div>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-white hover:bg-red-500 
               transition-colors duration-300 rounded-full p-1.5 shadow-sm hover:shadow-md"
                  aria-label="closebutton"
                >
                  <X size={22} />
                </button>
              </div>


              {/* Scrollable Form */}
              <div className="max-h-[85vh] overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
                <form className="space-y-6">
                  {/* Row 1: Full Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-gray-500 font-medium mb-1 text-sm sm:text-base">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-500 font-medium mb-1 text-sm sm:text-base">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone + City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-gray-500 font-medium mb-1 text-sm sm:text-base">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required placeholder="Enter your phone number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-gray-500 font-medium mb-1 text-sm sm:text-base">
                        City
                      </label>
                      <input
                        type="text"
                        required placeholder="Enter your city"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>

                  {/* Row 4: Project Details */}
                  <div className="flex flex-col">
                    <label className="text-gray-500 font-medium mb-1 text-sm sm:text-base">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      required placeholder="Tell us about your project..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>


            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
