import React from "react";
import { ShieldCheck, Award, Wrench, Sparkles, MapPin } from "lucide-react";
import { business } from "@/lib/business";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                alt="New Madina Electronic Horology Saddar"
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-neutral-950/20"></div>

              {/* Floating Counter Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white border border-neutral-200 shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-semibold mb-1">
                  Paradise Shopping Center · Saddar
                </p>
                <h4 className="text-base font-heading-luxury uppercase tracking-wider text-neutral-950 font-normal">
                  Shop S-141 & S-142
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Karachi's dedicated physical counter for genuine Casio and Japanese horology.
                </p>
              </div>
            </div>

            {/* Accent frame box */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gilded -z-10"></div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500 font-semibold">
                Boutique Heritage & Authenticity
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading-luxury uppercase tracking-wider text-neutral-950 font-normal leading-[1.15]">
                A Quarter Century of <br className="hidden sm:inline" />
                <span className="text-gilded font-serif-luxury italic lowercase font-normal">
                  authentic horology
                </span> in Karachi
              </h2>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed font-light">
              Nestled in the historic horological artery of Abdullah Haroon Road at <span className="font-semibold text-neutral-950">Paradise Shopping Center</span>, New Madina Electronic has catered to Karachi collectors, professionals, and students seeking genuine Japanese timepieces since 1998.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed font-light">
              In an era overwhelmed by replica copies and grey-market imitations, our counters S-141 and S-142 stand on an uncompromising pledge: every Casio MTP, Edifice solar chronograph, G-Shock indestructible square, and ClassWiz calculator is 100% genuine, backed by official warranty cards, manufacturer packaging, and transparent PKR pricing.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center gap-2 text-neutral-950">
                  <ShieldCheck className="w-4 h-4 text-gilded" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold">100% Genuine Direct Imports</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Direct official supply chains with serial number verification and factory barcode tags.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center gap-2 text-neutral-950">
                  <Award className="w-4 h-4 text-gilded" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold">Official 1-Year Warranty</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Every timepiece leaves our Saddar counter with a stamped warranty card for movement protection.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center gap-2 text-neutral-950">
                  <Wrench className="w-4 h-4 text-gilded" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold">Complimentary Link Sizing</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Professional in-boutique steel bracelet adjustment on the spot for the tailored wrist fit.
                </p>
              </div>

              <div className="p-4 bg-neutral-50 border border-neutral-200 space-y-1.5">
                <div className="flex items-center gap-2 text-neutral-950">
                  <Sparkles className="w-4 h-4 text-gilded" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold">Nationwide Insured COD</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Express courier delivery to Lahore, Islamabad, Faisalabad, and every postal code in Pakistan.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-neutral-700">
              <div>
                <span className="font-heading-luxury text-xl font-bold text-neutral-950 block">1998</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Established in Saddar</span>
              </div>
              <div className="w-px h-8 bg-neutral-200"></div>
              <div>
                <span className="font-heading-luxury text-xl font-bold text-neutral-950 block">10,000+</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Patrons in Karachi</span>
              </div>
              <div className="w-px h-8 bg-neutral-200"></div>
              <div>
                <span className="font-heading-luxury text-xl font-bold text-neutral-950 block">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500">Guaranteed Authenticity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
