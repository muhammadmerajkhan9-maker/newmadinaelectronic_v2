import React, { useState } from "react";
import { X, Check, ShieldCheck, Truck, RefreshCw, MessageSquare, Heart, ArrowRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, isInWishlist, toggleWishlist, formatPKR } = useStore();
  const [activeImage, setActiveImage] = useState<"product" | "lifestyle">("product");

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const isWish = isInWishlist(product.id);

  const whatsappInquiryUrl = `https://wa.me/923213979883?text=${encodeURIComponent(
    `Salam New Madina Electronic! I would like to inquire about this reference: ${product.name} (${product.reference}) priced at ${formatPKR(product.price)}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white text-neutral-900 w-full max-w-4xl border border-neutral-200 shadow-2xl z-10 overflow-hidden my-auto">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-neutral-500 hover:text-neutral-950 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Presentation (Lifestyle & Packshot) */}
          <div className="relative bg-neutral-100 flex flex-col justify-between">
            <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden bg-neutral-100 flex items-center justify-center">
              <img
                src={activeImage === "product" ? product.image : product.lifestyleImage}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {product.badge && (
                <div className="absolute top-4 left-4 bg-neutral-950 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Image Selector */}
            <div className="p-3 bg-neutral-50 border-t border-neutral-200 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveImage("product")}
                className={`flex-1 py-1.5 px-3 text-xs uppercase tracking-wider font-medium text-center border transition-all ${
                  activeImage === "product"
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Watch Details
              </button>
              <button
                type="button"
                onClick={() => setActiveImage("lifestyle")}
                className={`flex-1 py-1.5 px-3 text-xs uppercase tracking-wider font-medium text-center border transition-all ${
                  activeImage === "lifestyle"
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Lifestyle Wrist Shot
              </button>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                <span className="uppercase tracking-[0.2em] font-medium">{product.series || product.category}</span>
                <span className="font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5">{product.reference || product.model}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading-luxury uppercase text-neutral-950 mb-3 tracking-wide leading-snug">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-semibold text-neutral-950 font-serif-luxury">
                  {formatPKR(product.price)}
                </span>
                {(product.originalPrice || product.was) && (product.originalPrice || product.was)! > product.price && (
                  <span className="text-sm text-neutral-400 line-through">
                    {formatPKR((product.originalPrice || product.was)!)}
                  </span>
                )}
                <span className="text-xs text-emerald-800 font-medium ml-auto flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> In Stock at Saddar Counter
                </span>
              </div>

              <div className="h-px bg-neutral-200 my-4" />

              {product.description && (
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                  {product.description}
                </p>
              )}

              {/* Horological Specifications */}
              {product.specs && (
                <div className="bg-neutral-50 p-4 border border-neutral-200 mb-6">
                  <h4 className="text-[11px] uppercase tracking-wider font-semibold text-neutral-900 mb-3">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                    {product.specs.caseSize && (
                      <div>
                        <span className="text-neutral-500 block">Case Dimensions</span>
                        <span className="font-medium text-neutral-900">{product.specs.caseSize}</span>
                      </div>
                    )}
                    {product.specs.waterResistance && (
                      <div>
                        <span className="text-neutral-500 block">Water Resistance</span>
                        <span className="font-medium text-neutral-900">{product.specs.waterResistance}</span>
                      </div>
                    )}
                    {product.specs.glass && (
                      <div>
                        <span className="text-neutral-500 block">Glass Crystal</span>
                        <span className="font-medium text-neutral-900">{product.specs.glass}</span>
                      </div>
                    )}
                    {product.specs.movement && (
                      <div>
                        <span className="text-neutral-500 block">Calibre / Movement</span>
                        <span className="font-medium text-neutral-900">{product.specs.movement}</span>
                      </div>
                    )}
                    {product.specs.batteryLife && (
                      <div className="col-span-2">
                        <span className="text-neutral-500 block">Power Reserve / Battery</span>
                        <span className="font-medium text-neutral-900">{product.specs.batteryLife}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Value Propositions */}
              <div className="space-y-2 text-xs text-neutral-600 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>100% Genuine Casio with Official 1-Year Stamped Warranty Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Express Insured Courier Delivery Across Pakistan (COD available)</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-neutral-900 shrink-0" />
                  <span>Direct counter inspection at Paradise Shopping Center Saddar Karachi</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-neutral-200">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="flex-1 py-3.5 px-4 bg-neutral-950 text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Add to Bag</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 border transition-colors ${
                    isWish
                      ? "border-red-500 text-red-600 bg-red-50"
                      : "border-neutral-200 text-neutral-700 hover:border-neutral-950"
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWish ? "fill-current" : ""}`} />
                </button>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 border border-emerald-700 text-emerald-800 text-xs uppercase tracking-widest font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry / Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
