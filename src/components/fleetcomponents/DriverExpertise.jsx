import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Award, Shield, Clock } from "lucide-react";

export default function DriverExpertise() {
  const points = [
    {
      title: "Certified Professionals",
      icon: <Award className="h-10 w-10 text-blue-600" />,
      desc: "All our drivers are licensed and undergo continuous training to meet European logistics standards.",
    },
    {
      title: "Safety & Compliance",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      desc: "Strict adherence to road safety, cargo protection, and EU compliance ensures secure transportation.",
    },
    {
      title: "On-Time Deliveries",
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      desc: "Our drivers are trained to optimize routes, reduce delays, and deliver goods reliably across Europe.",
    },
    {
      title: "Customer-Focused",
      icon: <UserCheck className="h-10 w-10 text-blue-600" />,
      desc: "Professionalism and courteous behavior define our drivers, ensuring positive client experiences.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-blue-700 text-center mb-12"
        >
          Expert Drivers You Can Trust
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {p.title}
              </h3>
              <p className="text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
