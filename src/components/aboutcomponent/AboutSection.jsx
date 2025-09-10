import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/about/hero.webp";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About Truckzora"
            className="rounded-2xl shadow-lg w-full md:w-[85%] object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            About <span className="text-blue-600">Truckzora LLC</span>
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Truckzora LLC is a trusted name in <span className="font-semibold">Poland’s logistics and trucking industry</span>, 
            delivering goods across Poland and Europe with unmatched reliability.  
            Our fleet is equipped with <span className="text-blue-600 font-medium">modern trucks, GPS tracking, and experienced drivers</span> 
            to ensure timely and safe deliveries.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            We specialize in <span className="font-semibold">long-haul trucking, cross-border logistics, and cargo management</span>, 
            serving industries ranging from retail and manufacturing to construction and trade.
          </p>
         
        </motion.div>
      </div>
    </section>
  );
}
