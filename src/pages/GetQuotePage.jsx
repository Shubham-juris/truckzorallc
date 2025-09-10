// GetQuote.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function GetQuote() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    pickupCity: "",
    deliveryCity: "",
    cargoType: "",
    weightKg: "",
    dimensions: "",
    quantity: "",
    preferredPickupDate: "",
    incoterms: "",
    notes: "",
  });

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // {type: 'success'|'error', message: ''}

  // simple validation
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.pickupCity.trim()) e.pickupCity = "Pickup city required";
    if (!form.deliveryCity.trim()) e.deliveryCity = "Delivery city required";
    if (!form.cargoType.trim()) e.cargoType = "Cargo type required";
    if (!form.weightKg.trim()) e.weightKg = "Approx. weight required";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleFiles(e) {
    setFiles(Array.from(e.target.files));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    setStatus(null);

    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      files.forEach((f, i) => fd.append("attachments", f));

      const res = await fetch("/api/quote", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Server returned an error");
      }

      // success
      setStatus({ type: "success", message: "Quote request submitted. We'll contact you shortly." });
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        pickupCity: "",
        deliveryCity: "",
        cargoType: "",
        weightKg: "",
        dimensions: "",
        quantity: "",
        preferredPickupDate: "",
        incoterms: "",
        notes: "",
      });
      setFiles([]);
    } catch (err) {
      console.error("Quote submit error:", err);
      setStatus({ type: "error", message: "Failed to submit. Please try again or contact us directly." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Request a Quote</h2>
          <p className="mt-2 text-slate-600">
            Fill in the details below and our logistics team will provide a tailored quote.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow">
          {/* status */}
          {status && (
            <div
              className={`mb-6 p-3 rounded-md text-sm ${
                status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-300 focus:ring-red-300" : "border-gray-200 focus:ring-blue-300"
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-300 focus:ring-red-300" : "border-gray-200 focus:ring-blue-300"
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Phone *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.phone ? "border-red-300 focus:ring-red-300" : "border-gray-200 focus:ring-blue-300"
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Pickup City / Location *</label>
              <input name="pickupCity" value={form.pickupCity} onChange={handleChange} className={`mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${errors.pickupCity ? "border-red-300 focus:ring-red-300" : "border-gray-200 focus:ring-blue-300"}`} />
              {errors.pickupCity && <p className="mt-1 text-xs text-red-600">{errors.pickupCity}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Delivery City / Location *</label>
              <input name="deliveryCity" value={form.deliveryCity} onChange={handleChange} className={`mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${errors.deliveryCity ? "border-red-300 focus:ring-red-300" : "border-gray-200 focus:ring-blue-300"}`} />
              {errors.deliveryCity && <p className="mt-1 text-xs text-red-600">{errors.deliveryCity}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Cargo Type *</label>
              <input name="cargoType" value={form.cargoType} onChange={handleChange} className={`mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${errors.cargoType ? "border-red-300 focus:ring-red-300" : "border-gray-200 focus:ring-blue-300"}`} />
              {errors.cargoType && <p className="mt-1 text-xs text-red-600">{errors.cargoType}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Approx. Weight (kg) *</label>
              <input name="weightKg" value={form.weightKg} onChange={handleChange} className={`mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${errors.weightKg ? "border-red-300 focus:ring-red-300" : "border-gray-200 focus:ring-blue-300"}`} />
              {errors.weightKg && <p className="mt-1 text-xs text-red-600">{errors.weightKg}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Dimensions (L×W×H, cm)</label>
              <input name="dimensions" value={form.dimensions} onChange={handleChange} className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Quantity / Pallets</label>
              <input name="quantity" value={form.quantity} onChange={handleChange} className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Preferred Pickup Date</label>
              <input name="preferredPickupDate" type="date" value={form.preferredPickupDate} onChange={handleChange} className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Incoterms (if any)</label>
              <input name="incoterms" value={form.incoterms} onChange={handleChange} className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Additional Notes</label>
              <textarea name="notes" rows="4" value={form.notes} onChange={handleChange} className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Attachments (invoices / photos / specs)</label>
              <input type="file" multiple onChange={handleFiles} className="mt-2 w-full" />
              {files.length > 0 && (
                <p className="mt-2 text-sm text-slate-600">{files.length} file(s) selected</p>
              )}
            </div>
          </div>

          {/* submit */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="text-sm text-slate-600">
              By submitting you agree to our terms. We'll contact you within 24 hours.
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition ${
                submitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Submitting..." : "Request Quote"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
