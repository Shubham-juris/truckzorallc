import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Clock, BadgeCheck } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Unmatched Safety Standards",
      desc: "At Truckzora LLC, every shipment is handled with strict adherence to international safety protocols, ensuring your cargo reaches its destination without compromise.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Cross-Border Expertise",
      desc: "From Poland to Europe and beyond, our team specializes in seamless customs clearance, regulatory compliance, and efficient cross-border logistics operations.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "On-Time Every Time",
      desc: "We operate with precision scheduling and advanced GPS tracking, ensuring real-time visibility and punctual deliveries across all supply chain networks.",
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-blue-600" />,
      title: "Trusted by Global Partners",
      desc: "Our proven track record and partnerships with leading enterprises establish us as a reliable logistics backbone in the European and international market.",
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
          Why <span className="text-blue-600">Choose Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {p.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
