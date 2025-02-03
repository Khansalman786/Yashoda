import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Welcome to Progenesis",
    description: "Expert Care for Your Journey to Parenthood",
    image:
      "https://c8.alamy.com/comp/R9TN57/portrait-of-young-parents-with-cute-baby-sitting-on-bed-at-home-R9TN57.jpg",
  },
  {
    title: "Specialized Fertility Care",
    description: "State-of-the-art Fertility Treatments",
    image:
      "https://www.shutterstock.com/shutterstock/photos/582854098/display_1500/stock-photo-portrait-of-beautiful-young-parents-and-cute-baby-looking-at-camera-and-smiling-582854098.jpg",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="relative h-96 w-full overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-2 drop-shadow-md">
              {slide.title}
            </h1>
            <p className="text-lg drop-shadow-md">{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-4 h-4" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
          }
          className="p-3 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-100 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
          }
          className="p-3 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-100 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
