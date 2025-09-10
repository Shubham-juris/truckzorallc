import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServisesPage from "../pages/ServisesPage";
import FleetPage from "../pages/FleetPage";
import ScrollToTop from "../pages/ToptoScroll";
import Contact from "../pages/Contact";
import GetQuote from "../pages/GetQuotePage";

const RoutesPage = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServisesPage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<GetQuote />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
