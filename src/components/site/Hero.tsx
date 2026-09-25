import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

interface HeroSlide {
  id: number;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  lifestyleImage: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  featuredReference: string;
  featuredPrice: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "Autumn/Winter Horology Edit",
    title: "Timeless Precision.",
    titleHighlight: "Forged in Carbon.",
    subtitle:
      "Explore the iconic GA-2100 'CasiOak' and Master of G timepieces. Engineered for rugged resilience, tailored for high-fashion monochrome elegance.",
    lifestyleImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=85",
    ctaText: "Discover G-Shock Collection",
    ctaHref: "#trending",
    secondaryCtaText: "View Saddar Inventory",
    secondaryCtaHref: "#new-arrivals",
    featuredReference: "GA-2100-1ADR CasiOak",
    featuredPrice: "₨ 36,800",
  },
  {
    id: 2,
    eyebrow: "Saddar Karachi Boutique Exclusive",
    title: "Classic Sunburst.",
    titleHighlight: "Refined Fluted Bezel.",
    subtitle:
      "Karachi's most coveted classic. The MTP-1302D series blends a sleek black dial with gold accents, fluted bezel, and solid steel craftsmanship.",
    lifestyleImage:
      "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=1800&q=85",
    ctaText: "Shop MTP Collection",
    ctaHref: "#best-sellers",
    secondaryCtaText: "Check Counter Stock",
    secondaryCtaHref: "#visit",
    featuredReference: "MTP-1302D-1A2V",
    featuredPrice: "₨ 15,800",
  },
  {
    id: 3,
    eyebrow: "Flagship Horology & Motorsport",
    title: "Ultra-Slim Sapphire.",
    titleHighlight: "Solar Chronograph.",
    subtitle:
      "Edifice speed and intelligence. High-spec chronograph architecture equipped with scratch-resistant sapphire crystal glass and precision motorsport timing.",
    lifestyleImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1800&q=85",
    ctaText: "Explore Edifice Flagship",
    ctaHref: "#luxury",
    secondaryCtaText: "Technical Specs",
    secondaryCtaHref: "#luxury",
    featuredReference: "EFS-S590D-1AV Sapphire",
    featuredPrice: "₨ 67,000",
  },
  {
    id: 4,
    eyebrow: "Haute Horology For Her",
    title: "Timeless Elegance.",
    titleHighlight: "Quiet Luxury.",
    subtitle:
      "The LTP and Sheen luxury collections. Classic dress watch silhouettes crafted for enduring grace, stainless steel links, and everyday poise.",
    lifestyleImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1800&q=85",
    ctaText: "Explore Women's Curation",
    ctaHref: "#new-arrivals",
    secondaryCtaText: "Visit Boutique",
    secondaryCtaHref: "#visit",
    featuredReference: "LTP-1302D-7BV",
    featuredPrice: "₨ 11,900",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden min-h-[580px] lg:min-h-[720px] flex items-center">
      {/* Background Lifestyle Model Imagery with luxury gradient overlays */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-60" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={s.lifestyleImage}
              alt={s.title}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
            />
          </div>
        ))}
        {/* Editorial vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40"></div>
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Text */}
          <div className="lg:col-span-8 space-y-6">
            {/* Eyebrow kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-gilded"></span>
              <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-gilded">
                {slide.eyebrow}
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading-luxury uppercase tracking-wider text-white leading-[1.1] font-normal">
              {slide.title} <br className="hidden sm:inline" />
              <span className="text-gilded font-serif-luxury italic lowercase font-normal">
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl font-light leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTAs in clean luxury monochrome style */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={slide.ctaHref}
                className="px-8 py-4 bg-white text-neutral-950 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-neutral-200 transition-colors text-center flex items-center justify-center gap-3 group"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={slide.secondaryCtaHref}
                className="px-8 py-4 border border-neutral-600 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-neutral-950 transition-all text-center"
              >
                {slide.secondaryCtaText}
              </a>
            </div>

            {/* Featured Timepiece Tag */}
            <div className="pt-6 flex items-center gap-4 text-xs text-neutral-400">
              <span className="uppercase tracking-widest text-[10px] text-neutral-500 font-mono">
                Featured Calibre:
              </span>
              <span className="text-white font-medium">{slide.featuredReference}</span>
              <span className="text-neutral-600">·</span>
              <span className="text-gilded font-serif-luxury text-sm font-semibold">
                {slide.featuredPrice}
              </span>
            </div>
          </div>

          {/* Quick Info Box / Slide Indicators */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <div className="p-6 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-left space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-3">
                <span className="uppercase tracking-widest text-[10px]">Saddar Karachi Boutique</span>
                <span className="text-emerald-400 flex items-center gap-1 font-mono text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Open Today 11am-9:30pm
                </span>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Shop S-141 & S-142, Paradise Shopping Center, Abdullah Haroon Road. Inspect references in-person with official Casio warranty cards.
              </p>

              <div className="flex items-center gap-2 pt-1 text-[11px] text-gilded">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Genuine Direct Importer Stock</span>
              </div>
            </div>

            {/* Slider Navigation Dots & Controls */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 transition-all ${
                      idx === currentSlide ? "w-8 bg-white" : "w-2 bg-neutral-700 hover:bg-neutral-500"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="p-2 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="p-2 border border-neutral-800 text-white hover:bg-neutral-800 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
