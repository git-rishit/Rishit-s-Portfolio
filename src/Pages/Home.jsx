import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Correctly import the images
import Image1 from '../Components/Media/Image1.jpg';
import Image2 from '../Components/Media/Image2.jpg';
import Image3 from '../Components/Media/Image3.jpg';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Store the image paths in an array
  const photos = [Image1, Image2, Image3];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 3000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [photos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via -[#2d1b4e] via-[#4d376d] to-[#7b5ba6] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 bg-clip-text text-transparent">
                  Rishit
                </span>
              </h1>

              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-200">
                  Frontend Developer
                </h2>
                <p className="text-lg text-purple-100/80 leading-relaxed max-w-lg">
                  "I am a passionate frontend developer who loves
                  building websites that look good and work well. I enjoy
                  learning new technologies and improving my skills every day.
                  I’m excited to work with a team, share my ideas, and help
                  create digital solutions that make a real difference."
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Bootstrap",
                  "Tailwind",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-center"
              >
                <span className="relative z-10">View My Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right side - Photo Slideshow Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full">
              {/* Card Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Rishit Kabra
                </h3>
                <p className="text-purple-200">Frontend Developer</p>
              </div>

              {/* Photo Slideshow */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <img
                    src={photos[currentSlide]}
                    alt={`Rishit Kabra ${currentSlide + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />

                  {/* Navigation arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center space-x-3">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-purple-400 scale-125"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="text-center mt-6 space-y-2">
                <p className="text-purple-200 text-sm">
                  Passionate about creating amazing user experiences
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
