import React from "react";
import { motion } from "framer-motion";
import bgImg from "../../assets/home/hero.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row h-auto md:h-[95vh] mt-15">
      {/* Left Side - Content */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white/90 text-black py-10 md:py-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl px-6 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Driving{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Excellence
            </span>{" "}
            in Logistics
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black mb-10">
            TruckZora LLC – Your trusted partner for{" "}
            <span className="text-blue-400 font-semibold">safe, reliable</span>, and{" "}
            <span className="text-blue-400 font-semibold">on-time trucking</span>{" "}
            solutions across Poland & Europe.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/quote"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              Get a Quote
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-black font-bold px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div
        className="md:w-1/2 w-full h-60 sm:h-80 md:h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="w-full h-full bg-black/40"></div>
      </div>
    </section>
  );
}
