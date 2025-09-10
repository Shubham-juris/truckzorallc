import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Have questions about our trucking and logistics solutions? 
            Contact us today, we’re here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition">
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 h-6 w-6" />
              <p className="text-lg text-gray-700">
                Truckzora LLC, Warsaw, Poland
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 h-6 w-6" />
              <p className="text-lg text-gray-700">+48 123 456 789</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 h-6 w-6" />
              <p className="text-lg text-gray-700">info@truckzora.com</p>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                title="Truckzora Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.372676693435!2d21.01222931580211!3d52.22967597975709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6691d9e62f%3A0x9cf44e6b2f0b98f!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sin!4v1678897891234"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
