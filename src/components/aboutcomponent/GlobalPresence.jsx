import React from "react";
import { motion } from "framer-motion";

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-800 mb-8"
        >
          Global Presence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Headquartered in <span className="font-semibold text-blue-600">Poland</span>, 
          Truckzora LLC extends its trucking and logistics network across 
          <span className="font-semibold"> Central & Eastern Europe</span>, with established routes to 
          <span className="font-semibold"> Germany, France, Italy, and the Baltic States</span>.  
          Our cross-border trucking solutions also connect with international hubs for 
          global trade, ensuring <span className="font-semibold">seamless cargo movement</span> 
          between Europe, Asia, and beyond.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { region: "Europe", desc: "Strong trucking corridors in Germany, France, Italy, and the Baltics." },
            { region: "Asia", desc: "Partnerships with logistics hubs linking Europe to Central Asia." },
            { region: "Global Trade", desc: "Cross-border compliance and international freight forwarding expertise." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-slate-800">{item.region}</h3>
              <p className="text-slate-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
