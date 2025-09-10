import React from "react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
          <p className="text-slate-600 leading-relaxed">
            At Truckzora LLC, our mission is to redefine trucking standards by delivering 
            **timely, secure, and cost-efficient transportation solutions**. We are committed 
            to building a reliable logistics ecosystem that enhances business growth 
            and connects industries across borders.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
          <p className="text-slate-600 leading-relaxed">
            Our vision is to position Truckzora LLC as a **global leader in logistics**, 
            recognized for operational excellence, sustainable practices, and unmatched 
            customer trust. We aim to create seamless connections between Europe, 
            North America, and emerging markets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
