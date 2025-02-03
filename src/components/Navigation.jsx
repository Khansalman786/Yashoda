import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = ["Home", "About", "Fertility", "Blog", "Contact"];
  const services = ["Consultation", "Treatments", "Wellness Plans"];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold text-pink-600">
          <img
            src="https://yashodaivfcentre.com/wp-content/uploads//yashoda-ivf-logo-1536x408.png"
            alt="Logo"
            className="h-12"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-pink-600 font-medium text-lg transition duration-300 transform hover:scale-105"
            >
              {item}
            </a>
          ))}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-gray-700 hover:text-pink-600 font-medium text-lg transition duration-300 transform hover:scale-105"
            >
              Services <ChevronDown className="w-5 h-5 ml-2 transition duration-300" />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48 overflow-hidden"
                >
                  {services.map((service) => (
                    <a
                      key={service}
                      href={`#${service.toLowerCase()}`}
                      className="block px-5 py-3 text-gray-700 hover:bg-pink-100 transition duration-300"
                    >
                      {service}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105">
            Book Appointment
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col items-center space-y-6 py-6">
              {[...menuItems, "Services"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 font-medium text-lg hover:text-pink-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105">
                Book Appointment
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
