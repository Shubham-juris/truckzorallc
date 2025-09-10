import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Move with Truckzora?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl mb-8 text-blue-100"
        >
          Partner with Poland’s most reliable trucking company for safe, fast,
          and cost-efficient logistics solutions.
        </motion.p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-slate-100 transition"
        >
          <PhoneCall className="h-5 w-5" /> Get a Free Quote
        </a>
      </div>
    </section>
  );
}
