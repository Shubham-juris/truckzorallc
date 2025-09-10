import React from "react";
import { motion } from "framer-motion";

export default function FleetSection() {
  const fleet = [
    {
      type: "Heavy-Duty Trucks",
      desc: "Designed for long-haul and bulk transport, our heavy-duty fleet ensures reliable performance on both domestic and cross-border routes.",
    },
    {
      type: "Refrigerated Trucks",
      desc: "Equipped with advanced cooling systems, these trucks maintain optimal temperatures for perishable goods, pharmaceuticals, and food supply chains.",
    },
    {
      type: "Flatbed Trailers",
      desc: "Perfect for oversized loads, machinery, and construction equipment, our flatbed fleet provides flexible and safe transport solutions.",
    },
    {
      type: "Light Commercial Vehicles",
      desc: "Ideal for urban deliveries and last-mile logistics, ensuring speed and efficiency in city distribution networks.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12"
        >
          Our <span className="text-blue-600">Fleet</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {fleet.map((truck, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition text-left"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {truck.type}
              </h3>
              <p className="text-slate-600 leading-relaxed">{truck.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
