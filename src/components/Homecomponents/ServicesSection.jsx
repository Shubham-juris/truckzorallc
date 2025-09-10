import React from "react";
import { motion } from "framer-motion";
import { Truck, Globe, Warehouse, Shield } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Domestic & International Freight",
      desc: "Comprehensive trucking solutions across Poland and cross-border routes in Europe. Timely, safe, and cost-efficient deliveries tailored to business needs.",
      icon: <Truck className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Global Logistics Management",
      desc: "From route planning to customs clearance, we deliver end-to-end logistics solutions designed to simplify the most complex supply chains.",
      icon: <Globe className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Warehousing & Distribution",
      desc: "Strategically located storage facilities ensure faster turnarounds, reduced overheads, and smooth last-mile delivery operations.",
      icon: <Warehouse className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Secure & Reliable Transport",
      desc: "With advanced fleet tracking, insurance coverage, and highly trained drivers, we guarantee that every shipment reaches its destination safely.",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12"
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
