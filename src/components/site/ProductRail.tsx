import React, { useRef } from "react";
import { Product } from "@/types";
import { useStore } from "@/context/StoreContext";
import { Heart, Eye, ShoppingBag, ChevronLeft, ChevronRight, MessageSquare, ArrowRight } from "lucide-react";

interface ProductRailProps {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  items: Product[];
}

export const ProductRail: React.FC<ProductRailProps> = ({
  id,
  eyebrow,
  title,
  intro,
  items,
}) => {
  const { setQuickViewProduct, addToCart, isInWishlist, toggleWishlist, formatPKR } = useStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="py-20 bg-white border-b border-neutral-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold mb-2">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-heading-luxury uppercase tracking-wider text-neutral-950 font-normal leading-tight">
              {title}
            </h2>
            {intro && (
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-light">
                {intro}
              </p>
            )}
          </div>

          {/* Rail Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="p-3 border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-all text-neutral-700"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="p-3 border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-all text-neutral-700"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Rail with Lifestyle Hover Effect */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((product) => {
            const isWish = isInWishlist(product.id);
            const whatsappBuyUrl = `https://wa.me/923213979883?text=${encodeURIComponent(
              `Salam New Madina Electronic, I want to reserve/buy ${product.name} (${product.reference}) for ${formatPKR(product.price)}.`
            )}`;

            return (
              <div
                key={product.id}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start flex flex-col group border border-neutral-200 bg-white hover:border-neutral-950 transition-all duration-300 relative"
              >
                {/* Visual Area with Double Image (Product + Lifestyle Wrist Shot on hover) */}
                <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden cursor-pointer">
                  {/* Primary Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                    loading="lazy"
                  />

                  {/* Secondary Lifestyle Model Wrist Shot */}
                  <img
                    src={product.lifestyleImage || product.image}
                    alt={`${product.name} lifestyle`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-neutral-950 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium z-10">
                      {product.badge}
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors z-10 ${
                      isWish
                        ? "bg-white text-red-600 shadow-md"
                        : "bg-white/80 text-neutral-700 hover:bg-white hover:text-neutral-950"
                    }`}
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWish ? "fill-current" : ""}`} />
                  </button>

                  {/* Hover Quick Actions Bar */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-neutral-950/80 to-transparent flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="flex-1 py-2 px-3 bg-white text-neutral-950 text-[11px] uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="py-2 px-3 bg-neutral-950 text-white border border-white/20 text-[11px] uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center"
                      title="Add to Bag"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Information Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono mb-2">
                      <span>{product.reference || product.model}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.series || product.category}</span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <div className="pt-4 mt-3 border-t border-neutral-100">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-semibold text-neutral-950 font-serif-luxury">
                          {formatPKR(product.price)}
                        </span>
                        {(product.originalPrice || product.was) && (product.originalPrice || product.was)! > product.price && (
                          <span className="text-xs text-neutral-400 line-through">
                            {formatPKR((product.originalPrice || product.was)!)}
                          </span>
                        )}
                      </div>

                      <a
                        href={whatsappBuyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-800 hover:text-emerald-950 font-medium flex items-center gap-1"
                        title="Inquire on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
