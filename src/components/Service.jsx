import { FaBaby, FaHeartbeat, FaDna } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Prenatal Care",
      description: "Comprehensive care throughout your pregnancy journey.",
      icon: <FaBaby className="text-pink-500 text-5xl" />,
    },
    {
      title: "Fertility Treatment",
      description: "Advanced fertility solutions tailored to your needs.",
      icon: <FaHeartbeat className="text-red-500 text-5xl" />,
    },
    {
      title: "Genetic Counseling",
      description: "Expert guidance on genetic health matters.",
      icon: <FaDna className="text-blue-500 text-5xl" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
