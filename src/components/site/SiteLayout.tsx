import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Shield,
  MessageCircle,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { business } from "@/lib/business";
import { CartDrawer } from "./CartDrawer";
import { QuickViewModal } from "./QuickViewModal";

export const SiteLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cartCount, setIsCartOpen, wishlist, toastMessage } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
  };

  const navLinks = [
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "G-Shock", href: "#trending" },
    { label: "Edifice", href: "#luxury" },
    { label: "Best Sellers", href: "#best-sellers" },
    { label: "Categories", href: "#categories" },
    { label: "Our Boutique", href: "#visit" },
    { label: "Saddar Story", href: "#about" },
    { label: "Inquiries", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans">
      {/* Top Announcement Bar - LifestyleCollection minimal luxury */}
      <div className="bg-neutral-950 text-white text-[11px] tracking-[0.2em] uppercase py-2 px-4 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-gilded font-semibold">100% Original Casio</span>
            <span className="hidden md:inline text-neutral-600">·</span>
            <span className="hidden md:inline text-neutral-300">Saddar Karachi Boutique Counters S-141 & S-142</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-300">
            <span className="hidden lg:inline">Complimentary Express Delivery on orders over PKR 25,000</span>
            <a
              href="tel:+923213979883"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium text-gilded"
            >
              <Phone className="w-3 h-3" />
              <span>+92 321 3979883</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">
            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-900 hover:text-neutral-600 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation - Left */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-800 hover:text-neutral-950 transition-colors relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neutral-950 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Brand Logo - LifestyleCollection.pk High-Luxury Styling */}
            <div className="text-center">
              <a href="#" className="inline-block group focus:outline-none">
                <span className="block text-xl sm:text-2xl font-heading-luxury uppercase tracking-[0.25em] text-neutral-950 font-normal group-hover:opacity-85 transition-opacity">
                  New Madina
                </span>
                <span className="block text-[9px] uppercase tracking-[0.45em] text-neutral-500 font-medium -mt-1 group-hover:text-gilded transition-colors">
                  Casio Horology · Karachi
                </span>
              </a>
            </div>

            {/* Desktop Navigation - Right & Utilities */}
            <div className="flex items-center gap-4 sm:gap-6">
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mr-2">
                {navLinks.slice(4).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-800 hover:text-neutral-950 transition-colors relative group py-2"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neutral-950 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>

              {/* Home Search Anchor */}
              <a
                href="#search-bar"
                className="p-2 text-neutral-800 hover:text-neutral-950 transition-colors"
                aria-label="Search watches"
                title="Search watches"
              >
                <Search className="w-5 h-5" />
              </a>

              {/* Wishlist Link/Anchor */}
              <a
                href="#best-sellers"
                className="p-2 text-neutral-800 hover:text-neutral-950 transition-colors relative"
                aria-label="Wishlist"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-neutral-900 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </a>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-2.5 py-2 px-3 border border-neutral-200 hover:border-neutral-950 transition-colors text-neutral-950 text-xs uppercase tracking-wider font-semibold group"
                aria-label="Shopping bag"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-neutral-950 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline">Bag</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white px-6 py-8 space-y-6 animate-fadeIn">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.2em] font-medium text-neutral-800 hover:text-neutral-950 border-b border-neutral-100 pb-2"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-200 space-y-3 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-900 shrink-0" />
                <span>Shop S-141 & S-142, Paradise Shopping Center, Saddar, Karachi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-900 shrink-0" />
                <span>Mon – Sat: 11:00 AM – 9:30 PM (Sunday Closed)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-900 shrink-0" />
                <a href="tel:+923213979883" className="font-semibold text-neutral-950 underline">
                  +92-321-3979883
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/923213979883?text=Salam%20New%20Madina%20Electronic,%20I%20am%20inquiring%20about%20a%20Casio%20watch"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-neutral-950 text-white text-center text-xs uppercase tracking-widest font-semibold"
            >
              Order on WhatsApp Desk
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Luxury Footer (LifestyleCollection.pk inspired) */}
      <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Column 1: Brand & Heritage */}
            <div className="lg:col-span-2 space-y-5">
              <div className="space-y-1">
                <h3 className="text-2xl font-heading-luxury uppercase tracking-[0.25em] text-white">
                  New Madina Electronic
                </h3>
                <p className="text-[10px] uppercase tracking-[0.35em] text-gilded font-medium">
                  Original Casio Watches & Horology Boutique · Karachi
                </p>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
                Established at the legendary Paradise Shopping Center in Saddar Karachi, New Madina Electronic is recognized by collectors and horology enthusiasts across Pakistan for 100% genuine Casio, G-Shock, Edifice, and vintage Japanese timepieces.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-gilded" />
                  <span>100% Authentic Guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gilded"></span>
                  <span>1-Year Official Warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gilded"></span>
                  <span>Saddar Counter Pickup</span>
                </div>
              </div>
            </div>

            {/* Column 2: Collections */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white mb-5 border-b border-neutral-800 pb-2">
                Casio Collections
              </h4>
              <ul className="space-y-3 text-xs text-neutral-400">
                <li>
                  <a href="#trending" className="hover:text-white transition-colors">
                    G-Shock Carbon Core & CasiOak
                  </a>
                </li>
                <li>
                  <a href="#luxury" className="hover:text-white transition-colors">
                    Edifice Sapphire & Tough Solar
                  </a>
                </li>
                <li>
                  <a href="#best-sellers" className="hover:text-white transition-colors">
                    Men's MTP & Tiffany Blue
                  </a>
                </li>
                <li>
                  <a href="#new-arrivals" className="hover:text-white transition-colors">
                    Women's LTP & Sheen Luxury
                  </a>
                </li>
                <li>
                  <a href="#best-sellers" className="hover:text-white transition-colors">
                    Casio Vintage Gold & Chrome
                  </a>
                </li>
                <li>
                  <a href="#new-arrivals" className="hover:text-white transition-colors">
                    Official Scientific Calculators
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Care & Policies */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white mb-5 border-b border-neutral-800 pb-2">
                Client Services
              </h4>
              <ul className="space-y-3 text-xs text-neutral-400">
                <li>
                  <a href="#visit" className="hover:text-white transition-colors">
                    Visit Saddar Boutique Counter
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Authenticity Verification Guide
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Warranty Claim Procedures
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Cash on Delivery Across Pakistan
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Complimentary Bracelet Sizing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    WhatsApp Order Concierge
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Saddar Boutique Hours & Contact */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-white mb-5 border-b border-neutral-800 pb-2">
                Saddar Boutique
              </h4>
              <div className="space-y-2 text-xs text-neutral-400">
                <p className="font-semibold text-neutral-200">Shop S-141 & S-142</p>
                <p>Paradise Shopping Center,</p>
                <p>Abdullah Haroon Road, Saddar, Karachi - 74400</p>
                <p className="text-neutral-500 pt-1">Mon – Sat: 11:00 AM – 9:30 PM</p>
                <p className="text-neutral-500">Sunday Closed</p>
              </div>

              <div className="pt-2">
                <a
                  href={business.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gilded hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Counter Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter / VIP Horology Club */}
          <div className="border-t border-neutral-900 py-10 my-8">
            <div className="max-w-xl mx-auto text-center space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gilded font-semibold">
                Private Horology Registry
              </p>
              <h4 className="text-lg font-heading-luxury uppercase tracking-wider text-white">
                Receive Alerts for Rare Casio References
              </h4>
              <p className="text-xs text-neutral-400">
                Be notified immediately when high-demand references like Tiffany MTP, CasiOak, and limited edition G-Shocks land at our Saddar counters.
              </p>

              {newsletterSuccess ? (
                <div className="p-3 bg-neutral-900 border border-neutral-800 text-xs text-emerald-400">
                  Thank you. You have been registered for New Madina Electronic VIP release notices.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto pt-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-neutral-900 border border-neutral-800 text-white text-xs px-4 py-3 focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-neutral-950 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar & Trust Badges */}
          <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} {business.name}. All Rights Reserved. Saddar, Karachi, Pakistan.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-neutral-400">
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800">Cash on Delivery (Pakistan)</span>
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800">Bank Transfer / Raast</span>
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800">Same-Day Karachi Rider</span>
              <span className="px-2 py-1 bg-neutral-900 border border-neutral-800">In-Store Sizing</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp VIP Desk Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/923213979883?text=Salam%20New%20Madina%20Electronic,%20I%20am%20inquiring%20about%20genuine%20Casio%20watches"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-neutral-950 text-white py-3 px-4 shadow-2xl border border-neutral-800 hover:bg-neutral-800 transition-all group"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <MessageCircle className="w-5 h-5 text-emerald-400" />
          <div className="text-left hidden sm:block">
            <span className="block text-[10px] uppercase tracking-widest text-neutral-400 font-semibold leading-tight">
              Saddar Counter Desk
            </span>
            <span className="block text-xs font-semibold text-white leading-tight">
              Instant WhatsApp
            </span>
          </div>
        </a>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-950 text-white px-6 py-3 border border-neutral-800 shadow-2xl text-xs uppercase tracking-wider font-semibold animate-fadeIn">
          {toastMessage}
        </div>
      )}

      {/* Drawers & Modals */}
      <CartDrawer />
      <QuickViewModal />
    </div>
  );
};
