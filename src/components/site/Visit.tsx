import React from "react";
import { MapPin, Clock, Phone, Navigation, MessageCircle, ExternalLink, CheckCircle } from "lucide-react";
import { business } from "@/lib/business";

export const Visit: React.FC = () => {
  return (
    <section id="visit" className="py-24 bg-neutral-100 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Boutique Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-semibold">
                Saddar Karachi Boutique Counters
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading-luxury uppercase tracking-wider text-neutral-950 font-normal">
                Visit Our Counter at <br />
                <span className="text-gilded font-serif-luxury italic lowercase font-normal">
                  Paradise Shopping Center
                </span>
              </h2>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              Experience the weight, wrist presence, and finishing of genuine Casio references in person. Our specialists are ready to demonstrate solar features, Bluetooth synchronization, and provide custom steel bracelet link adjustment.
            </p>

            {/* Address & Operational Hours Cards */}
            <div className="space-y-4">
              <div className="p-5 bg-white border border-neutral-200 flex items-start gap-4">
                <div className="p-3 bg-neutral-950 text-white shrink-0">
                  <MapPin className="w-5 h-5 text-gilded" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-950">
                    Boutique Location
                  </h4>
                  <p className="text-xs text-neutral-700 mt-1 font-medium">
                    Shop S-141 & S-142, Paradise Shopping Center
                  </p>
                  <p className="text-xs text-neutral-500">
                    Abdullah Haroon Road, Saddar, Karachi, 74400, Sindh, Pakistan
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    (Opposite Regal Chowk / Zainab Market corridor)
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white border border-neutral-200 flex items-start gap-4">
                <div className="p-3 bg-neutral-950 text-white shrink-0">
                  <Clock className="w-5 h-5 text-gilded" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-950">
                      Operating Schedule
                    </h4>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 font-semibold">
                      Open Today
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700 mt-1 font-medium">
                    Monday – Saturday: 11:00 AM – 9:30 PM
                  </p>
                  <p className="text-xs text-neutral-500">
                    Friday: 3:00 PM – 9:30 PM (Break for Juma prayer)
                  </p>
                  <p className="text-xs text-red-600 font-medium mt-0.5">
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white border border-neutral-200 flex items-start gap-4">
                <div className="p-3 bg-neutral-950 text-white shrink-0">
                  <Phone className="w-5 h-5 text-gilded" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-950">
                    Direct Counter Desk
                  </h4>
                  <p className="text-xs text-neutral-700 mt-1">
                    Direct Call:{" "}
                    <a href="tel:+923213979883" className="font-semibold text-neutral-950 underline">
                      +92-321-3979883
                    </a>
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Instant stock verification and Karachi rider dispatch
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={business.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-gilded" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/923213979883?text=Salam%20New%20Madina%20Electronic,%20please%20send%20me%20your%20Paradise%20Shopping%20Center%20location%20pin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-emerald-700 text-emerald-800 text-xs uppercase tracking-widest font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request WhatsApp Location Pin</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Boutique Presentation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/3] bg-neutral-900 border border-neutral-300 overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80"
                alt="Paradise Shopping Center Saddar Karachi"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

              {/* Map/Counter Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md border border-neutral-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-500">
                    Saddar Commercial Corridor
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-gilded font-semibold">
                    Karachi South
                  </span>
                </div>
                <h4 className="text-base font-heading-luxury uppercase text-neutral-950 font-normal">
                  Paradise Shopping Center · Counter S-141 & S-142
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Walking distance from Regal Chowk, Atrium Mall, and Preedy Police Station. Safe parking available in surrounding plaza areas.
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Walk-in consultations welcome</span>
                  <span className="font-semibold text-neutral-900">Same-day collection</span>
                </div>
              </div>
            </div>

            {/* In-store benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-neutral-200 text-xs space-y-1">
                <span className="font-semibold text-neutral-900 block flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gilded" /> Wrist Measurement
                </span>
                <span className="text-neutral-500">Try multiple dials before deciding.</span>
              </div>
              <div className="p-4 bg-white border border-neutral-200 text-xs space-y-1">
                <span className="font-semibold text-neutral-900 block flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gilded" /> Serial Verification
                </span>
                <span className="text-neutral-500">Examine packaging & warranty card in person.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
