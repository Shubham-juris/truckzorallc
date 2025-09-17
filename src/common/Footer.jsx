import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/navbar/truckzora.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img
            src={logo}
            alt="Truckzora LLC"
            className="h-16 w-16 rounded-full object-cover mb-4"
          />
          <p className="text-sm leading-relaxed">
            Truckzora LLC – Reliable logistics and trucking services, delivering
            your cargo safely and on time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <NavLink to="/" className="hover:text-blue-400">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-blue-400">
              About
            </NavLink>
            <NavLink to="/services" className="hover:text-blue-400">
              Services
            </NavLink>
            <NavLink to="/fleet" className="hover:text-blue-400">
              Fleet
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-400">
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> <a href="tel:+48123456789">+48 123 456 789</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />{" "}
              <a href="mailto:info@truckzora.com">info@truckzora.com</a>
            </li>
            <li className="flex items-center gap-2">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                ul. Marszałkowska 58, 00-545 Warsaw, Poland
              </p>{" "}
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 bg-blue-700 rounded">
              <Facebook />
            </a>
            <a href="#" className="hover:text-red-700 bg-red-500 rounded">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-slate-700 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Truckzora LLC. All Rights Reserved.
      </div>
    </footer>
  );
}
