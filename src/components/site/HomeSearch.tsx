import React, { useState, useMemo } from "react";
import { Search, X, ArrowRight, Eye, ShoppingBag } from "lucide-react";
import { allProducts } from "@/data/catalog";
import { useStore } from "@/context/StoreContext";

export const HomeSearch: React.FC = () => {
  const { setQuickViewProduct, addToCart, formatPKR } = useStore();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const quickTags = [
    "Tiffany Blue MTP",
    "GA-2100 CasiOak",
    "Edifice Sapphire",
    "Vintage Gold",
    "Women's Tank",
    "fx-991CW",
  ];

  const categories = ["All", "G-Shock", "Edifice", "Men", "Women", "Vintage", "Calculators"];

  const filteredProducts = useMemo(() => {
    if (!query.trim() && selectedCategory === "All") return [];

    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      if (!query.trim()) return matchesCategory;

      const q = query.toLowerCase();
      const ref = product.reference || product.model || "";
      const series = product.series || product.category || "";
      const desc = product.description || "";
      const brand = product.brand || "";

      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        ref.toLowerCase().includes(q) ||
        series.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        brand.toLowerCase().includes(q) ||
        (product.badge && product.badge.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [query, selectedCategory]);

  return (
    <section id="search-bar" className="py-12 bg-neutral-100 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold mb-2">
            Reference Directory & Horology Search
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading-luxury uppercase tracking-wider text-neutral-950 font-normal mb-6">
            Find Your <span className="text-gilded font-serif-luxury italic lowercase font-normal">reference</span>
          </h2>

          {/* Search Input Box */}
          <div className="relative">
            <div className="relative flex items-center bg-white border border-neutral-300 shadow-sm focus-within:border-neutral-950 transition-colors">
              <Search className="w-5 h-5 text-neutral-400 ml-4 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by Casio reference code (e.g. MTP-1302D, GA-2100, EFS-S570, fx-991)..."
                className="w-full py-4 pl-3 pr-10 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none bg-transparent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="p-2 text-neutral-400 hover:text-neutral-900 mr-2"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown */}
            {query.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-300 shadow-2xl z-30 max-h-96 overflow-y-auto text-left divide-y divide-neutral-100 animate-fadeIn">
                {filteredProducts.length === 0 ? (
                  <div className="p-8 text-center text-xs text-neutral-500">
                    No Casio references found matching "{query}". Message our Saddar counter desk on WhatsApp for specific availability.
                  </div>
                ) : (
                  <>
                    <div className="p-3 bg-neutral-50 text-[10px] uppercase tracking-wider text-neutral-500 font-semibold flex justify-between">
                      <span>Found {filteredProducts.length} References</span>
                      <span className="text-neutral-400">Paradise Shopping Center Stock</span>
                    </div>
                    {filteredProducts.slice(0, 6).map((product) => (
                      <div
                        key={product.id}
                        className="p-4 hover:bg-neutral-50 flex items-center justify-between gap-4 transition-colors"
                      >
                        <div
                          className="flex items-center gap-4 cursor-pointer flex-1"
                          onClick={() => setQuickViewProduct(product)}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-14 h-16 object-cover bg-neutral-100 border border-neutral-200"
                          />
                          <div>
                            <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-500">
                              {product.reference || product.model}
                            </span>
                            <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 leading-snug">
                              {product.name}
                            </h4>
                            <p className="text-xs font-serif-luxury font-semibold text-neutral-950 mt-1">
                              {formatPKR(product.price)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setQuickViewProduct(product)}
                            className="p-2 text-neutral-600 hover:text-neutral-950 border border-neutral-200 hover:border-neutral-950 transition-colors"
                            title="Quick View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => addToCart(product)}
                            className="p-2 bg-neutral-950 text-white hover:bg-neutral-800 transition-colors"
                            title="Add to Bag"
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Category Filter Buttons (Functional filter buttons complying with Skill guidelines) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Tag Recommendations */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-500">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400">Popular:</span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setQuery(tag)}
                className="hover:text-neutral-950 underline underline-offset-4 decoration-neutral-300 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
