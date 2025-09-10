import React from "react";
import { motion } from "framer-motion";
import { Truck, Package, Warehouse, Globe, ShieldCheck } from "lucide-react";

export default function ServiceCards() {
  const services = [
    {
      title: "Full Truckload (FTL) Services",
      desc: "Dedicated truck capacity for your large shipments with guaranteed timely deliveries across Poland and Europe.",
      icon: <Truck className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Less-than-Truckload (LTL)",
      desc: "Cost-effective solution for smaller loads, combining multiple shipments into one truck without compromising reliability.",
      icon: <Package className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Warehousing Solutions",
      desc: "Secure, strategically located storage facilities with advanced inventory management systems to support your supply chain.",
      icon: <Warehouse className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Cross-Border Logistics",
      desc: "Seamless international trucking with complete documentation support for smooth customs clearance and faster delivery.",
      icon: <Globe className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Secure & Insured Transport",
      desc: "All shipments are protected with comprehensive insurance coverage and advanced tracking for peace of mind.",
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
