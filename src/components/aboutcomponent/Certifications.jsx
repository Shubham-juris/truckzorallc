import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Award } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Safety First",
      desc: "Certified for European road safety standards ensuring accident-free and secure cargo handling.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-600" />,
      title: "Regulatory Compliance",
      desc: "Full compliance with EU transport laws, cross-border regulations, and customs clearance protocols.",
    },
    {
      icon: <Award className="h-10 w-10 text-blue-600" />,
      title: "Quality Assurance",
      desc: "Recognized for high service quality with ISO-certified operational processes.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-800 mb-8"
        >
          Certifications & Compliance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          At Truckzora LLC, we don’t just deliver goods — we deliver with 
          <span className="font-semibold text-blue-600"> trust, safety, and compliance</span>.  
          Our certifications demonstrate our commitment to **global logistics standards**, 
          ensuring every shipment is handled with care and precision.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{c.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800">{c.title}</h3>
              <p className="text-slate-600 mt-2">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
