import React, { useState } from "react";
import { ChevronDown, ShieldCheck, HelpCircle } from "lucide-react";
import { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    q: "Are all Casio watches at New Madina Electronic 100% original and authentic?",
    a: "Absolutely. New Madina Electronic has operated in Saddar Karachi since 1998. Every single Casio, G-Shock, Edifice, and calculator we retail is 100% genuine, sourced strictly via official distribution channels with complete manufacturer packaging, barcode tags, and serial numbers. We invite customers to inspect the engraving and module on our counters anytime.",
    category: "Authenticity",
  },
  {
    q: "Do your watches come with an official Casio warranty card and box?",
    a: "Yes. Every watch sold includes its authentic original Casio presentation box, user operation manual, and an official stamped warranty card granting 1-year coverage on internal movement and mechanism faults.",
    category: "Warranty",
  },
  {
    q: "Where is your counter located in Saddar Karachi, and what are your opening hours?",
    a: "We are located at Shop S-141 & S-142, Paradise Shopping Center, Abdullah Haroon Road, Saddar, Karachi (near Regal Chowk / Zainab Market corridor). We are open Monday through Saturday from 11:00 AM to 9:30 PM (Friday prayers break 1:00 PM to 2:30 PM). Sunday is closed.",
    category: "Boutique Visit",
  },
  {
    q: "Do you offer Cash on Delivery (COD) across Pakistan?",
    a: "Yes! We dispatch via reputable express courier services (TCS, Leopards, Trax) to all major cities and towns across Pakistan. For Karachi, same-day or next-day rider delivery with open-parcel verification is available. Nationwide delivery typically takes 2 to 4 working days.",
    category: "Shipping",
  },
  {
    q: "Can I get my stainless steel watch bracelet sized at your store?",
    a: "Yes, complimentary bracelet link adjustments and sizing are performed on the spot for any timepiece purchased from New Madina Electronic at our Saddar boutique counters.",
    category: "Service",
  },
  {
    q: "How can I place an urgent order or verify real-time stock?",
    a: "You can click any 'Order on WhatsApp' button on this website or message our direct counter helpline at +92-321-3979883. Our horology specialists will send you live photos or wrist-roll videos of the exact watch in stock before you order.",
    category: "Orders",
  },
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with LifestyleCollection minimalist luxury style */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold mb-3">
            Client Inquiries & Standards
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading-luxury uppercase tracking-wider text-neutral-950 font-normal">
            Frequently Asked <span className="text-gilded italic font-serif-luxury lowercase font-normal">questions</span>
          </h2>
          <div className="w-12 h-px bg-neutral-900 mx-auto mt-5"></div>
          <p className="mt-4 text-sm text-neutral-600 max-w-xl mx-auto">
            Everything you need to know about our original Casio timepiece inventory, Saddar counter inspection, and nationwide delivery.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {faq.q}
                  </span>
                  <span className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-neutral-950" : "text-neutral-400 group-hover:text-neutral-700"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-6 text-sm text-neutral-600 leading-relaxed animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center shrink-0 text-gilded">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Have a specific reference inquiry?</h4>
              <p className="text-xs text-neutral-400 mt-1">Our Saddar Karachi counter team responds instantly on WhatsApp with real stock photos.</p>
            </div>
          </div>
          <a
            href="https://wa.me/923213979883?text=Salam%20New%20Madina%20Electronic,%20I%20have%20a%20question%20regarding%20a%20watch"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-white text-neutral-950 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
          >
            Direct WhatsApp Desk
          </a>
        </div>
      </div>
    </section>
  );
};
