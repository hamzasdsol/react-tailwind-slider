import React, { useState } from "react";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import '../App.css';
const slides = [
  {
    id: 1,
    title: "Discover",
    subtitle: "Warm Heart Beauty",
    text: "The Nordic Countries varied landscapes offer wonderful scenery for any journey, no matter by land or sea. How you choose to travel will depend on where you go.",
    buttonText: "Show regions",
    image: image1,
  },
  {
    id: 2,
    title: "To Do",
    subtitle: "Close with Nature",
    text: "There's never a bad time to visit the Nordic countries! When you should visit will depend on which types of activities or natural phenomena interest you most.",
    buttonText: "Activities",
    image:image2
  },
  {
    id: 3,
    title: "Plan",
    subtitle: "Nordics Top Attractions",
    text: "June, July and August is the best time to travel, this is when you can expect the warmest weather, longest daylight hours, and best availability of outdoor activities.",
    buttonText: "Reservations",
    image:image3,
  },
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (id) => {
    setActiveSlide(id);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative max-w-6xl w-full overflow-hidden bg-white shadow-lg">
        <div className="absolute top-0 left-0 w-1/5 h-full flex flex-col items-center justify-center">
          <ul className="flex space-x-4 transform rotate-90 poppins-regular">
            {slides.map((slide) => (
              <li
                key={slide.id}
                onClick={() => handleSlideChange(slide.id)}
                className={`text-sm font-semibold uppercase cursor-pointer mb-4 ${activeSlide === slide.id ? "text-red-500 font-bold" : "text-gray-500"}`}
              >
                {slide.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-4/5 float-right h-[500px] relative overflow-hidden">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ${activeSlide === slide.id ? "z-10 opacity-100" : "z-0 opacity-0"}`}
            >
              <img
  src={slide.image}
  alt={slide.title}
  className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
    activeSlide === slide.id ? "scale-100" : "scale-110"
  }`}
  style={{
    filter: activeSlide === slide.id ? "brightness(100%)" : "brightness(75%)",
  }}
/>
<div className="absolute inset-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white flex flex-col justify-center">
                <h1
                  className={`text-6xl poppins-extrabold text-white absolute top-10 left-10 uppercase transition-all duration-700 ${
                    activeSlide === slide.id ? "translate-y-0" : "-translate-y-16"
                  }`}
                >
                  {slide.title}
                </h1>

                <div className="relative z-10 mt-16 text-center">
                  <h2
                    className={`text-3xl md:text-5xl poppins-extrabold text-white uppercase transform transition-all duration-1000 mt-10 ${
                      activeSlide === slide.id ? "translate-x-4" : "translate-x-full"
                    }`}
                  >
                    {slide.subtitle}
                  </h2>
                  <p
                    className={`text-md max-w-lg mt-12 mx-auto text-center poppins-regular`}
                  >
                    {slide.text}
                  </p>

                  <button className="mt-4 px-6 py-3 font-semibold border border-red-500 text-red-500 uppercase text-lg tracking-wide hover:bg-red-700 hover:text-white transition-all">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 left-1/5 flex space-x-2 pl-4">
          {slides.map((slide) => (
            <div
              key={slide.id}
              onClick={() => handleSlideChange(slide.id)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                activeSlide === slide.id ? "bg-red-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
