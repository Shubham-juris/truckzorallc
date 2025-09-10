import React from "react";
import { motion } from "framer-motion";
import { Package, Factory, Building2, ShoppingCart } from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      icon: <Package className="h-10 w-10 text-blue-600" />,
      title: "Retail & FMCG",
      desc: "Timely distribution of fast-moving consumer goods to retail outlets and supermarkets."
    },
    {
      icon: <Factory className="h-10 w-10 text-blue-600" />,
      title: "Manufacturing",
      desc: "Transportation of raw materials and finished goods for industrial and manufacturing sectors."
    },
    {
      icon: <Building2 className="h-10 w-10 text-blue-600" />,
      title: "Construction",
      desc: "Logistics solutions for construction equipment, heavy machinery, and building materials."
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-blue-600" />,
      title: "E-Commerce",
      desc: "Efficient last-mile delivery solutions for online businesses and e-commerce platforms."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          Industries We <span className="text-blue-600">Serve</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center">{ind.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mt-4">
                {ind.title}
              </h3>
              <p className="text-slate-600 mt-2">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
