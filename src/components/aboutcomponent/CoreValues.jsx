import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Globe, Handshake, TrendingUp, Leaf } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Reliability",
      desc: "Delivering goods safely and on time, every single time.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Timeliness",
      desc: "Our fleet ensures strict adherence to delivery schedules.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Standards",
      desc: "Operating with practices aligned to international logistics benchmarks.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-600" />,
      title: "Integrity",
      desc: "We build trust through transparent processes and ethical operations.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Growth",
      desc: "Driving success for our clients while scaling our operations sustainably.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-blue-600" />,
      title: "Sustainability",
      desc: "Committed to eco-friendly logistics and reducing carbon footprint.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">
          Our Core <span className="text-blue-600">Values</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{val.icon}</div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">{val.title}</h4>
              <p className="text-slate-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
