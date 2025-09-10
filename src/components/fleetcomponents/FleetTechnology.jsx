import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Wrench, BatteryCharging } from "lucide-react";

export default function FleetTechnology() {
  const features = [
    {
      title: "GPS & Telematics",
      icon: <Cpu className="h-10 w-10 text-blue-600" />,
      desc: "Every truck is equipped with real-time GPS tracking and telematics systems to ensure transparency and on-time delivery.",
    },
    {
      title: "Safety First",
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      desc: "Advanced braking systems, driver-assist technologies, and safety compliance checks guarantee cargo protection and road safety.",
    },
    {
      title: "Regular Maintenance",
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      desc: "Our fleet undergoes rigorous inspections and servicing schedules, minimizing downtime and ensuring reliability on every route.",
    },
    {
      title: "Eco-Friendly Fleet",
      icon: <BatteryCharging className="h-10 w-10 text-blue-600" />,
      desc: "We invest in fuel-efficient and low-emission vehicles, supporting sustainable logistics across Europe.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-blue-700 text-center mb-12"
        >
          Fleet Technology & Maintenance
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {f.title}
              </h3>
              <p className="text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
