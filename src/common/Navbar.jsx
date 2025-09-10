import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "../assets/navbar/truckzora.png";

export default function Navbar() {
  const [sidebarColor, setSidebarColor] = useState("gradient");
  const [open, setOpen] = useState(false); 

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/fleet", label: "Fleet" },
    { to: "/contact", label: "Contact" },
  ];

  // Dynamic nav link classes based on theme
  const navLinkClass = ({ isActive }) => {
    const base =
      sidebarColor === "white"
        ? "text-gray-800 hover:bg-gray-200"
        : "text-white hover:bg-gray-800";

    return `block px-4 py-2 rounded-lg transition ${
      isActive ? "bg-blue-600 text-white" : base
    }`;
  };

  // Sidebar background based on selected theme
  const sidebarBg =
    sidebarColor === "black"
      ? "bg-black"
      : sidebarColor === "white"
      ? "bg-white"
      : "bg-gradient-to-b from-blue-900 to-black";

  const borderColor =
    sidebarColor === "white" ? "border-gray-300" : "border-gray-600";

  return (
    <>
      {/* ================= Desktop Sidebar ================= */}
      <aside
        className={`hidden md:flex fixed top-0 left-0 h-full w-64 ${sidebarBg} shadow-lg flex-col justify-between z-50`}
      >
        {/* Logo */}
        <div className="p-6 flex flex-col items-center">
          <img
            src={logo}
            alt="Truckzora LLC"
            className="h-24 w-24 rounded-full mb-8 object-cover"
          />
          <nav className="flex flex-col gap-2 w-full">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={navLinkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Color Switcher */}
        <div className={`p-6 flex gap-3 justify-center border-t ${borderColor}`}>
          <button
            onClick={() => setSidebarColor("black")}
            className="h-4 w-4 rounded-full bg-black border border-white"
          />
          <button
            onClick={() => setSidebarColor("white")}
            className="h-4 w-4 rounded-full bg-white border border-gray-400"
          />
          <button
            onClick={() => setSidebarColor("gradient")}
            className="h-4 w-4 rounded-full bg-gradient-to-b from-blue-900 to-black"
          />
        </div>

        {/* CTA */}
        <div className={`p-6 border-t ${borderColor}`}>
          <a
            href="tel:+48123456789"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </aside>

      {/* ================= Mobile Topbar ================= */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center justify-between px-4 h-16">
        <img
          src={logo}
          alt="Truckzora LLC"
          className="h-12 w-12 rounded-full object-cover"
        />
        <button onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </header>

      {/* ================= Mobile Drawer ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="flex-1 bg-black/50" onClick={() => setOpen(false)}></div>

          {/* Drawer */}
          <div
            className={`w-64 ${sidebarBg} h-full shadow-lg flex flex-col justify-between relative`}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="p-6 flex flex-col items-center">
              <img
                src={logo}
                alt="Truckzora LLC"
                className="h-20 w-20 rounded-full mb-6 object-cover"
              />
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-2 px-6">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Color Switcher */}
            <div className={`p-6 flex gap-3 justify-center border-t ${borderColor}`}>
              <button
                onClick={() => setSidebarColor("black")}
                className="h-4 w-4 rounded-full bg-black border border-white"
              />
              <button
                onClick={() => setSidebarColor("white")}
                className="h-4 w-4 rounded-full bg-white border border-gray-400"
              />
              <button
                onClick={() => setSidebarColor("gradient")}
                className="h-4 w-4 rounded-full bg-gradient-to-b from-blue-900 to-black"
              />
            </div>

            {/* CTA */}
            <div className={`p-6 border-t ${borderColor}`}>
              <a
                href="tel:+48123456789"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
