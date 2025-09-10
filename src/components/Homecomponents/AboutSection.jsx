import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"
        >
          About <span className="text-blue-600">Truckzora LLC</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-700 leading-relaxed mb-6"
        >
          Truckzora LLC is a Poland-based logistics and freight company committed to
          redefining trucking services with precision, speed, and reliability. 
          Our foundation is built on delivering <span className="font-semibold text-slate-900">seamless transportation solutions</span> 
          for businesses of every scale — from small distributors to multinational corporations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-slate-700 leading-relaxed mb-6"
        >
          With a fleet of modern trucks, highly trained drivers, and advanced logistics systems,
          we ensure that every shipment is delivered on schedule, securely, and at optimal cost. 
          Our operations are fueled by <span className="text-blue-600 font-medium">efficiency, transparency, and 
          global industry standards</span>, making us one of the most trusted freight carriers across Europe.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-slate-700 leading-relaxed"
        >
          Whether it’s domestic freight within Poland or cross-border logistics across the EU, 
          Truckzora LLC delivers not just goods, but also <span className="font-semibold text-slate-900">
          trust, professionalism, and long-term partnerships</span>.
        </motion.p>
      </div>
    </section>
  );
}
