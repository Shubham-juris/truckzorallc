import React from "react";
import { motion } from "framer-motion";

export default function FleetIntro() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6">
          Our Fleet – Powering Reliable Logistics
        </h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          At <span className="font-semibold">TruckZora LLC</span>, our fleet is
          more than just trucks – it is the backbone of a logistics network
          built on efficiency, safety, and modern technology. With a diverse
          range of vehicles tailored to different industries, we ensure every
          shipment is delivered on time, across Poland and Europe. Each truck in
          our fleet undergoes rigorous maintenance and is equipped with advanced
          tracking systems to guarantee seamless operations and maximum
          reliability.
        </p>
      </motion.div>
    </section>
  );
}
