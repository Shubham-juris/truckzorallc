import React from "react";
import { motion } from "framer-motion";
import { FileText, ClipboardCheck, Truck, Globe, PackageCheck } from "lucide-react";

export default function ProcessFlow() {
  const steps = [
    {
      title: "Step 1: Request & Consultation",
      desc: "Clients share their logistics requirements with our expert team. We analyze cargo size, route feasibility, and timelines.",
      icon: <FileText className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Step 2: Tailored Quotation",
      desc: "Based on your needs, we provide transparent and competitive pricing with detailed logistics planning.",
      icon: <ClipboardCheck className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Step 3: Dispatch & Tracking",
      desc: "Your shipment is dispatched through our reliable fleet. Real-time GPS tracking ensures you stay updated.",
      icon: <Truck className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Step 4: Cross-Border Handling",
      desc: "Our team manages customs clearance, documentation, and cross-border compliance seamlessly.",
      icon: <Globe className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Step 5: Safe Delivery",
      desc: "Shipments are delivered on-time with full safety checks, proof of delivery, and client confirmation.",
      icon: <PackageCheck className="h-10 w-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          Our Logistics Process
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
