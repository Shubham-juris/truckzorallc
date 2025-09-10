import React from "react";
import { motion } from "framer-motion";
import { Truck, Snowflake, Package, Construction, Warehouse } from "lucide-react";

export default function FleetCategories() {
  const categories = [
    {
      title: "Flatbed Trucks",
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      desc: "Perfect for transporting oversized loads, construction materials, and machinery across long distances with ease and security.",
    },
    {
      title: "Refrigerated Trucks",
      icon: <Snowflake className="h-10 w-10 text-blue-600" />,
      desc: "Temperature-controlled vehicles designed to transport perishable goods, ensuring quality and freshness every mile.",
    },
    {
      title: "Container Trucks",
      icon: <Package className="h-10 w-10 text-blue-600" />,
      desc: "Specialized for intermodal freight, our container trucks streamline international and cross-border logistics.",
    },
    {
      title: "Heavy Haulage",
      icon: <Construction className="h-10 w-10 text-blue-600" />,
      desc: "Built for transporting extra-large or overweight cargo, fully compliant with European road safety regulations.",
    },
    {
      title: "Distribution Vehicles",
      icon: <Warehouse className="h-10 w-10 text-blue-600" />,
      desc: "Ideal for last-mile delivery and regional distribution, offering speed and efficiency for urban logistics.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-12">
          Diverse Fleet Categories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-2xl transition"
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {cat.title}
              </h3>
              <p className="text-slate-600">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
