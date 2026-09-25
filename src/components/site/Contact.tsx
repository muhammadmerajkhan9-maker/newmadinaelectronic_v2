import React, { useState } from "react";
import { MessageSquare, Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { business } from "@/lib/business";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reference: "",
    inquiryType: "stock_check",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send formatted WhatsApp message
    const msg = `*NEW INQUIRY - NEW MADINA ELECTRONIC*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nReference of Interest: ${formData.reference || "General Inquiry"}\nInquiry Type: ${formData.inquiryType}\nMessage: ${formData.message || "Please share availability and pricing."}`;

    window.open(`https://wa.me/923213979883?text=${encodeURIComponent(msg)}`, "_blank");
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Concierge Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gilded font-semibold">
                Saddar Boutique Concierge
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading-luxury uppercase tracking-wider text-white font-normal">
                Direct Horology <br />
                <span className="text-gilded font-serif-luxury italic lowercase font-normal">
                  inquiry & advice
                </span>
              </h2>
            </div>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Seeking a discontinued G-Shock reference, specific MTP dial colorway, or inquiring about nationwide courier dispatch? Connect directly with our counter specialists in Saddar Karachi.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 bg-neutral-900 border border-neutral-800 flex items-start gap-4">
                <div className="p-2 bg-neutral-800 text-gilded shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                    Counter Telephone Line
                  </h4>
                  <a
                    href="tel:+923213979883"
                    className="text-sm text-neutral-200 hover:text-white font-mono mt-1 block"
                  >
                    +92-321-3979883
                  </a>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Available Mon – Sat, 11:00 AM – 9:30 PM
                  </p>
                </div>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 flex items-start gap-4">
                <div className="p-2 bg-neutral-800 text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                    Instant WhatsApp Desk
                  </h4>
                  <a
                    href="https://wa.me/923213979883?text=Salam%20New%20Madina%20Electronic,%20I%20am%20inquiring%20about%20a%20Casio%20watch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:underline mt-1 block font-medium"
                  >
                    Chat with Saddar Desk Specialist →
                  </a>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Fast response with live stock photos & wrist-rolls
                  </p>
                </div>
              </div>

              <div className="p-4 bg-neutral-900 border border-neutral-800 flex items-start gap-4">
                <div className="p-2 bg-neutral-800 text-gilded shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                    Physical Boutique
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    Shop S-141 & S-142, Paradise Shopping Center, Saddar, Karachi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white text-neutral-900 p-8 sm:p-10 border border-neutral-200 shadow-xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading-luxury uppercase tracking-wider">
                  Inquiry Forwarded to Saddar Desk
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. Our horology specialists at Paradise Shopping Center are reviewing your reference inquiry and will respond shortly on WhatsApp / Phone at <span className="font-semibold">{formData.phone}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-neutral-200 pb-3 mb-4">
                  <h3 className="text-base font-heading-luxury uppercase tracking-wider text-neutral-950 font-normal">
                    Submit Reference Inquiry
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Direct counter verification for stock availability, live wrist video, or bespoke reservations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Asad Khan"
                      className="w-full p-3 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-950 bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0321-xxxxxxx"
                      className="w-full p-3 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-950 bg-neutral-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-700 mb-1">
                      Casio Reference / Model
                    </label>
                    <input
                      type="text"
                      value={formData.reference}
                      onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                      placeholder="e.g. MTP-1302D-2A2V or GA-2100"
                      className="w-full p-3 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-950 bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full p-3 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-950 bg-neutral-50"
                    >
                      <option value="stock_check">Check Real-Time Stock Availability</option>
                      <option value="video_request">Request Live Wrist Video on WhatsApp</option>
                      <option value="reserve_counter">Reserve for Saddar Counter Pickup</option>
                      <option value="nationwide_cod">Inquire Nationwide Cash on Delivery</option>
                      <option value="calculator_bulk">Calculators (Student / Commercial)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-700 mb-1">
                    Detailed Notes / Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us if you want photos of the warranty card, bracelet sizing assistance, or delivery timeframe..."
                    className="w-full p-3 text-xs border border-neutral-300 focus:outline-none focus:border-neutral-950 bg-neutral-50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct to Saddar Counter Desk</span>
                </button>

                <p className="text-[11px] text-neutral-500 text-center pt-1">
                  100% genuine Casio imports. Responses are dispatched promptly during boutique hours (11:00 AM – 9:30 PM).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
