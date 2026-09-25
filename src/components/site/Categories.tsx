import React from "react";
import { ArrowUpRight } from "lucide-react";
import { curatedCategories } from "@/data/catalog";

export const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-neutral-950 text-white border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gilded font-semibold mb-3">
            Curated Horological Categories
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading-luxury uppercase tracking-wider text-white font-normal">
            The Casio <span className="text-gilded font-serif-luxury italic lowercase font-normal">curations</span>
          </h2>
          <div className="w-12 h-px bg-gilded mx-auto mt-4 mb-4"></div>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            From the indestructible carbon engineering of G-Shock to the refined Swiss-inspired geometry of MTP and Edifice solar chronographs.
          </p>
        </div>

        {/* Category Grid (Editorial Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedCategories.map((cat, idx) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-neutral-800 flex flex-col justify-end p-8 transition-all hover:border-neutral-500"
            >
              {/* Background Lifestyle Model Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.lifestyleImage}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
                {/* Dark luxury gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
                <div className="absolute inset-0 bg-neutral-950/30 group-hover:bg-neutral-950/10 transition-colors"></div>
              </div>

              {/* Text & Details */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between text-gilded">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-mono">
                    {cat.count}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-neutral-950 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-heading-luxury uppercase tracking-wider text-white">
                  {cat.name}
                </h3>

                <p className="text-xs text-neutral-300 font-light line-clamp-2">
                  {cat.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
