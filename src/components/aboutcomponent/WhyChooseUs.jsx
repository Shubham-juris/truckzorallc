import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Timer, Building2 } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Modern Fleet",
      desc: "Our trucks are equipped with advanced technology ensuring efficiency and safety.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Trusted Partner",
      desc: "A proven track record in handling domestic and international logistics with full transparency.",
    },
    {
      icon: <Timer className="h-8 w-8 text-blue-600" />,
      title: "On-Time Deliveries",
      desc: "Strict scheduling and route optimization ensure timely delivery, every time.",
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Corporate Reliability",
      desc: "Standardized processes and compliance make us the preferred choice for enterprises worldwide.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">
          Why Choose <span className="text-blue-600">Truckzora LLC</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex gap-4"
            >
              <div className="flex-shrink-0">{point.icon}</div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{point.title}</h4>
                <p className="text-slate-600">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
