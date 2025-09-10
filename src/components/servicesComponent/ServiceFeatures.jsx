import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Globe, Truck } from "lucide-react";

export default function ServiceFeatures() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Reliable & Secure",
      desc: "Every shipment is handled with the highest level of safety and security standards."
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "On-Time Delivery",
      desc: "Our logistics system ensures your goods always reach the destination on schedule."
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Global Reach",
      desc: "We cover domestic and international markets with seamless supply chain integration."
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      title: "Modern Fleet",
      desc: "Equipped with state-of-the-art trucks designed for efficiency, speed, and safety."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          Why Choose <span className="text-blue-600">Truckzora Services?</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              {f.icon}
              <h3 className="text-xl font-semibold text-slate-800 mt-4">{f.title}</h3>
              <p className="text-slate-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
