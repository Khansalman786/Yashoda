import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="p-8 bg-white shadow-lg rounded-2xl space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Phone className="text-pink-600" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-pink-600" />
              <span className="text-gray-700">contact@babycare.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-pink-600" />
              <span className="text-gray-700">123 Care Street, Medical District</span>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="text-pink-600" />
              <span className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </motion.div>
          <motion.form 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="p-8 bg-white shadow-lg rounded-2xl space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg h-36 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            ></textarea>
            <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition duration-300">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
