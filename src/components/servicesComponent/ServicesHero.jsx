import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/services/hero.jpg";

export default function ServicesHero() {
  return (
    <section className="relative flex flex-col md:flex-row h-auto md:h-[70vh] mt-15">
      {/* Left Side - Content */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white text-black py-10 md:py-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl px-6 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Trucking
            </span>{" "}
            Services
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-black">
            Truckzora LLC provides reliable and efficient trucking & logistics
            solutions across Poland and Europe, ensuring every delivery is on
            time, secure, and cost-effective.
          </p>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div
        className="md:w-1/2 w-full h-60 sm:h-80 md:h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="w-full h-full bg-black/40"></div>
      </div>
    </section>
  );
}
