import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Fertility = () => {
  return (
    <section id="fertility" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          className="text-4xl font-extrabold text-center text-pink-700 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fertility Care
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold text-pink-800 mb-6">Our Approach</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every fertility journey is unique. We offer a personalized approach that blends the
              latest medical advancements with compassionate care, helping you achieve your dreams of starting a family.
            </p>
            
            <div className="space-y-3">
              {["In Vitro Fertilization (IVF)", "Intrauterine Insemination (IUI)", "Fertility Preservation"].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 text-lg font-medium text-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-pink-600" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="shadow-xl overflow-hidden rounded-lg bg-white p-4">
              <img
                src="https://www.milann.co.in/assets/imgs/blogs/fertility-care-in-india-landscape.jpg"
                alt="Fertility Care"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fertility;
