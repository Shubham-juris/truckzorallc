import React from "react";
import { motion } from "framer-motion";
import truck1 from "../../assets/fleet/truck1.webp";
import truck2 from "../../assets/fleet/truck2.jpg";
import truck3 from "../../assets/fleet/truck3.jpg";
import truck4 from "../../assets/fleet/truck4.jpg";
import truck5 from "../../assets/fleet/truck5.avif";
import truck6 from "../../assets/fleet/truck6.jpeg";

export default function FleetGallery() {
  const fleet = [
    { name: "Long-Haul Trucks", img: truck1 },
    { name: "Refrigerated Trucks", img: truck2 },
    { name: "Flatbed Trailers", img: truck3 },
    { name: "Container Trucks", img: truck4 },
    { name: "Tanker Trucks", img: truck5 },
    { name: "Specialized Heavy Duty", img: truck6 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-blue-700 mb-12"
        >
          Our Modern Fleet
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {fleet.map((truck, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={truck.img}
                alt={truck.name}
                className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-blue-600 text-white py-4 font-semibold">
                {truck.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
