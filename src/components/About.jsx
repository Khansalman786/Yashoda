const About = () => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 relative">
        About Us
        <span className="block w-16 h-1 bg-pink-600 mx-auto mt-2"></span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://thumbs.dreamstime.com/b/young-couple-baby-top-view-beautiful-parents-their-cute-holding-hands-looking-camera-smiling-lying-86668953.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 opacity-20 rounded-lg"></div>
        </div>
        <div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            With over 20 years of experience in fertility care, our team of
            experts is dedicated to helping families achieve their dreams of
            parenthood through compassionate care and advanced medical
            treatments. The best IVF fertility center in Navi Mumbai, Yashoda
            IVF Fertility & IVF Centre, is dedicated to providing you with
            state-of-the-art infertility treatment with compassionate care. Our
            specialists, with over 15 years of expertise, ensure personalized
            attention and successful results during your IVF journey.
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition duration-300 transform hover:bg-pink-700 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default About;
