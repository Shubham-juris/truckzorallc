import React from "react";
import { motion } from "framer-motion";
import { Truck, Globe, Clock, Award } from "lucide-react";

export default function FleetStats() {
  const stats = [
    { icon: <Truck size={40} />, value: "150+", label: "Active Trucks" },
    { icon: <Globe size={40} />, value: "12+", label: "Countries Covered" },
    { icon: <Clock size={40} />, value: "20+ Years", label: "Industry Experience" },
    { icon: <Award size={40} />, value: "99.9%", label: "On-Time Deliveries" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-blue-700 mb-12"
        >
          TruckZora By the Numbers
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <div className="text-blue-600 mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
