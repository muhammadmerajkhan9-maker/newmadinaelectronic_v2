import React from "react";
import { Star, ShieldCheck, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  watchModel: string;
  rating: number;
  review: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Hamza Siddiqui",
    location: "DHA Phase 6, Karachi",
    watchModel: "Casio MTP-1302D-2A2V 'Tiffany Blue'",
    rating: 5,
    review:
      "I had been hunting for the genuine Tiffany MTP across Karachi for two months. Most online sellers were pushing replicas. Visited New Madina Electronic's counter at Paradise Shopping Center in Saddar; inspected the box, barcode, and warranty stamp on the spot. Authentic piece and honest pricing.",
    date: "February 2026",
  },
  {
    id: 2,
    name: "Omer Farooq",
    location: "Gulshan-e-Iqbal, Karachi",
    watchModel: "G-Shock GA-2100-1A1 'All Black CasiOak'",
    rating: 5,
    review:
      "Ordered the all-black CasiOak via their WhatsApp desk. Received it the same evening in Karachi with rider delivery. Box sealed, 100% genuine carbon core guard, and the official warranty card properly filled. Outstanding service from Saddar.",
    date: "January 2026",
  },
  {
    id: 3,
    name: "Zainab Shah",
    location: "Clifton Block 4, Karachi",
    watchModel: "Casio LTP-V007L-7E1 Roman Tank",
    rating: 5,
    review:
      "The Parisian tank watch looks stunning on the wrist. Much better quality and weight than high-street fashion brands. The staff at New Madina Electronic were courteous, patient, and wrapped it beautifully for a gift.",
    date: "March 2026",
  },
  {
    id: 4,
    name: "Bilal Khattak",
    location: "F-10, Islamabad (Nationwide COD)",
    watchModel: "Casio Edifice EFS-S570DB-2A Sapphire",
    rating: 5,
    review:
      "Was slightly hesitant ordering from Saddar Karachi while residing in Islamabad, but the team sent detailed photos and video of the watch serial before dispatch. Arrived via TCS in 2 days. The sapphire glass and slim octagon case are breathtaking.",
    date: "January 2026",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-semibold mb-3">
            Verified Patron Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading-luxury uppercase tracking-wider text-neutral-950 font-normal">
            Voices of Karachi <span className="text-gilded font-serif-luxury italic lowercase font-normal">collectors</span>
          </h2>
          <div className="w-12 h-px bg-neutral-900 mx-auto mt-4 mb-4"></div>
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            Over two decades of genuine timepieces, verified serials, and enduring customer trust at Paradise Shopping Center Saddar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-neutral-50 border border-neutral-200 flex flex-col justify-between hover:border-neutral-950 transition-colors relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-neutral-200 group-hover:text-gilded transition-colors -z-0" />

              <div className="relative z-10 space-y-4">
                {/* Star rating */}
                <div className="flex items-center gap-1 text-gilded">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed font-light italic">
                  "{t.review}"
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-950">{t.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                    <span>{t.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-neutral-700">{t.watchModel}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-800 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Verified Buyer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary bar */}
        <div className="mt-16 p-6 border border-neutral-200 bg-neutral-100/50 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="font-serif-luxury text-2xl font-bold text-neutral-950 block">4.9 / 5.0</span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500">Customer Satisfaction</span>
          </div>
          <div className="w-px h-8 bg-neutral-300 hidden md:block"></div>
          <div>
            <span className="font-serif-luxury text-2xl font-bold text-neutral-950 block">100%</span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500">Genuine Japanese Imports</span>
          </div>
          <div className="w-px h-8 bg-neutral-300 hidden md:block"></div>
          <div>
            <span className="font-serif-luxury text-2xl font-bold text-neutral-950 block">1-Year</span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500">Official Movement Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};
