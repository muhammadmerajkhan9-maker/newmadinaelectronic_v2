import React from "react";
import { StoreProvider } from "@/context/StoreContext";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { HomeSearch } from "@/components/site/HomeSearch";
import { ProductRail } from "@/components/site/ProductRail";
import { Categories } from "@/components/site/Categories";
import { About } from "@/components/site/About";
import { Visit } from "@/components/site/Visit";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq, faqs } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { LuxuryLoader } from "@/components/site/LuxuryLoader";
import { bestSellers, luxuryPicks, newArrivals, trending } from "@/data/catalog";
import { business } from "@/lib/business";

export function Index() {
  return (
    <>
      <LuxuryLoader />
      <SiteLayout>
        {/* Lifestyle Model Editorial Hero */}
        <Hero />

        {/* Reference Directory & Live Search */}
        <HomeSearch />

        {/* 1. New Arrivals: Just landed in Saddar */}
        <ProductRail
          id="new-arrivals"
          eyebrow="New arrivals"
          title={
            <>
              Just landed in <span className="text-gilded">Saddar</span>
            </>
          }
          intro="The latest genuine Casio references to reach our counter, priced in PKR and ready to collect today."
          items={newArrivals}
        />

        {/* Curated Categories with Lifestyle Model Imagery */}
        <Categories />

        {/* 2. Best Sellers: Karachi's most wanted */}
        <ProductRail
          id="best-sellers"
          eyebrow="Best sellers"
          title={
            <>
              Karachi's most <span className="text-gilded">wanted</span>
            </>
          }
          intro="The references our customers ask for by name, week after week."
          items={bestSellers}
        />

        {/* Mid-Page Editorial Feature Banner (LifestyleCollection.pk signature look) */}
        <section className="py-20 bg-neutral-950 text-white border-y border-neutral-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden border border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                  alt="Casio horology lifestyle model"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-neutral-950/40"></div>
                <div className="absolute bottom-6 left-6 p-4 bg-neutral-950/90 border border-neutral-800 max-w-xs">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gilded block font-mono">
                    Engineering Archive
                  </span>
                  <p className="text-xs text-neutral-300 mt-1 font-light">
                    The GA-2100 Octagon series fuses carbon fiber core resilience with minimalist luxury tailoring.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 lg:pl-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gilded font-semibold">
                    The Horological Standard
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-heading-luxury uppercase tracking-wider text-white font-normal leading-tight">
                    Clean Lines. Unrivaled Toughness. <br />
                    <span className="text-gilded font-serif-luxury italic lowercase font-normal">
                      monochrome luxury
                    </span>
                  </h3>
                </div>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Inspired by Pakistan's premier horology destinations, New Madina Electronic brings international boutique curation to Paradise Shopping Center in Saddar Karachi. Every watch is curated for precision, durability, and distinguished wrist presence.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="border-l border-gilded pl-3 space-y-1">
                    <span className="text-white font-semibold block uppercase tracking-wider text-[11px]">
                      Authentic Japanese Calibres
                    </span>
                    <span className="text-neutral-400">Direct importer supply with verified serials.</span>
                  </div>
                  <div className="border-l border-gilded pl-3 space-y-1">
                    <span className="text-white font-semibold block uppercase tracking-wider text-[11px]">
                      Transparent PKR Pricing
                    </span>
                    <span className="text-neutral-400">No hidden import surcharges or grey-market fees.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#visit"
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-neutral-950 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    <span>Visit Our Saddar Counter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Luxury Collection: The flagship shelf */}
        <ProductRail
          id="luxury"
          eyebrow="Luxury collection"
          title={
            <>
              The <span className="text-gilded">flagship</span> shelf
            </>
          }
          intro="Premium Casio engineering — solar, Bluetooth-connected and sapphire-class references."
          items={luxuryPicks}
        />

        {/* 4. Trending now: G-SHOCK on the rise */}
        <ProductRail
          id="trending"
          eyebrow="Trending now"
          title={
            <>
              G-SHOCK on the <span className="text-gilded">rise</span>
            </>
          }
          intro="High-demand carbon core, Bluetooth solar octagons, and military shockproof designs."
          items={trending}
        />

        {/* Saddar Heritage Story */}
        <About />

        {/* Interactive Boutique Visit Counter Guide */}
        <Visit />

        {/* Verified Karachi Patron Testimonials */}
        <Testimonials />

        {/* Luxury FAQs */}
        <Faq />

        {/* VIP Horology Concierge & Inquiries */}
        <Contact />
      </SiteLayout>
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Index />
    </StoreProvider>
  );
}
