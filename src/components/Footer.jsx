import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-10 text-gray-400">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-white">Yashoda IVF</h3>
            <p className="mt-3">
              Providing expert care for your journey to parenthood.
            </p>
            <div className="flex space-x-4 mt-4">
              {[faFacebookF, faTwitter, faInstagram, faLinkedinIn].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
                >
                  <FontAwesomeIcon icon={icon} className="text-white" />
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-pink-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2">
              {["Prenatal Care", "Fertility Treatment", "Genetic Counseling"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-pink-400">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get the latest updates.</p>
            <div className="flex bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="p-3 w-full bg-transparent text-white focus:outline-none"
              />
              <button className="bg-pink-600 px-5 hover:bg-pink-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2025 BabyCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
