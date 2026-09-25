import { Product, Brand, Category, Gender } from "@/types";
import { productsPart1 } from "./productsPart1";
import { productsPart2 } from "./productsPart2";
import { priceList } from "./prices";

export { type Product, type Brand, type Category, type Gender };

export const brands: Brand[] = ["Casio", "Seiko", "Rado", "Citizen", "Curren", "Naviforce", "Q&Q"];

export const categories: Category[] = [
  "G-Shock",
  "Edifice",
  "Vintage",
  "Analog",
  "Digital",
  "Scientific Calculators",
  "Basic Calculators",
];

export const genders: Gender[] = ["Men", "Women", "Unisex"];

export const formatPKR = (value: number) => `₨ ${value.toLocaleString("en-PK")}`;

// Combine all real catalog products
const rawProducts: Product[] = [...productsPart1, ...productsPart2];

// Apply the centralized price list over the catalogue
for (const p of rawProducts) {
  const override = priceList[p.model];
  if (override) {
    p.price = override.price;
    p.was = override.was ?? null;
  }
}

// Curated lifestyle wrist photography mapping for the luxury LifestyleCollection.pk feel
const lifestyleMap: Record<string, string> = {
  "G-Shock": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  "Edifice": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
  "Vintage": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
  "Analog": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  "Digital": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  "Scientific Calculators": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
  "Basic Calculators": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
};

// Enrich products for seamless display in the luxury store components
export const products: Product[] = rawProducts.map((p) => {
  const isFemale = p.gender === "Women";
  const lifestyleImage = isFemale
    ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    : lifestyleMap[p.category] || "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=800&q=80";

  return {
    ...p,
    reference: p.model,
    originalPrice: p.was ?? undefined,
    lifestyleImage,
    series: p.category,
    inStock: true,
    description: `${p.name} - Genuine ${p.brand} timepiece. 100% authentic stock direct from authorized distribution with official packaging, serial verification, and ${p.warranty}. Available for inspection and collection at New Madina Electronic, Paradise Shopping Center, Saddar Karachi.`,
    specs: {
      caseSize: p.category === "G-Shock" ? "48.5 × 45.4 × 11.8 mm" : p.category === "Edifice" ? "49 × 44 × 10.2 mm" : isFemale ? "31 × 25 × 8 mm" : "39 × 36 × 9 mm",
      waterResistance: p.category === "G-Shock" ? "200m (20 bar)" : p.category === "Edifice" ? "100m (10 bar)" : "50m Water Resistant",
      glass: p.price > 45000 ? "Sapphire Crystal" : "Mineral Glass",
      movement: p.category.includes("Calculators") ? "Casio LSI Processor" : p.category === "G-Shock" ? "Shock-Resistant Quartz" : "Japanese Quartz Calibre",
      batteryLife: "Approx. 2–10 years depending on module",
      features: [p.warranty, "Direct Importer Stock", "Official Box & Manual Included", "Saddar Counter Verified"],
    },
    badge: p.was ? "Special Offer" : p.price > 60000 ? "Flagship Shelf" : undefined,
  };
});

export const allProducts: Product[] = products;

export const priceBounds = {
  min: Math.min(...products.map((p) => p.price)),
  max: Math.max(...products.map((p) => p.price)),
};

// Curated Rails matching the sections on the front page using the user's authentic products
export const newArrivals: Product[] = [
  products.find((p) => p.model === "GA-2100-1ADR"),
  products.find((p) => p.model === "MTP-1302D-1A2V"),
  products.find((p) => p.model === "EFS-S590D-1AV"),
  products.find((p) => p.model === "LTP-1302D-7BV"),
  products.find((p) => p.model === "GA-2110SU-3ADR"),
  products.find((p) => p.model === "MTP-VD01D-2BV"),
  products.find((p) => p.model === "FX-991CW"),
  products.find((p) => p.model === "GM-2100B-4A"),
].filter(Boolean) as Product[];

export const bestSellers: Product[] = [
  products.find((p) => p.model === "A158WA-1D"),
  products.find((p) => p.model === "MTP-1308D-1A"),
  products.find((p) => p.model === "DW-5600BB-1DR"),
  products.find((p) => p.model === "EFV-540D-1A9V"),
  products.find((p) => p.model === "LTP-1237D-7ADF"),
  products.find((p) => p.model === "F-91W-1SDG"),
  products.find((p) => p.model === "FX-991EX"),
  products.find((p) => p.model === "MTP-V005D-1B5"),
].filter(Boolean) as Product[];

export const luxuryPicks: Product[] = [
  products.find((p) => p.model === "GST-B400D-1ADR"),
  products.find((p) => p.model === "GST-B500AD-3A"),
  products.find((p) => p.model === "ECB-S100DC-2A"),
  products.find((p) => p.model === "R48913153"),
  products.find((p) => p.model === "BN0150-28E"),
  products.find((p) => p.model === "SRPD55K1"),
  products.find((p) => p.model === "PRW-3100FC-1DR"),
  products.find((p) => p.model === "SHE-4056PG-4A"),
].filter(Boolean) as Product[];

export const trending: Product[] = [
  products.find((p) => p.model === "DW-291H-1AV"),
  products.find((p) => p.model === "GA-700VB-1A"),
  products.find((p) => p.model === "A168WG-9W"),
  products.find((p) => p.model === "B640WB-1ADF"),
  products.find((p) => p.model === "AE-1200WH-1AVDF"),
  products.find((p) => p.model === "MTP-1302DD-9A"),
  products.find((p) => p.model === "GBD-200UU-1DR"),
  products.find((p) => p.model === "A100WE-1A"),
].filter(Boolean) as Product[];

export const curatedCategories = [
  {
    id: "g-shock",
    name: "G-Shock",
    subtitle: "Absolute Toughness & Carbon Core",
    count: `${products.filter((p) => p.category === "G-Shock").length} Models`,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    href: "#trending",
  },
  {
    id: "edifice",
    name: "Edifice Speed",
    subtitle: "Sapphire & Solar Motorsport Chronographs",
    count: `${products.filter((p) => p.category === "Edifice").length} Models`,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    href: "#luxury",
  },
  {
    id: "men-analog",
    name: "Men's MTP & Analog",
    subtitle: "Fluted Bezel, Classic Steel & Leather Straps",
    count: `${products.filter((p) => p.category === "Analog" && p.gender === "Men").length} Models`,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=800&q=80",
    href: "#best-sellers",
  },
  {
    id: "women-ltp",
    name: "Women's LTP & Sheen",
    subtitle: "Rose Gold, Roman Dials & Swarovski Pieces",
    count: `${products.filter((p) => p.gender === "Women").length} Models`,
    image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    href: "#new-arrivals",
  },
  {
    id: "vintage",
    name: "Vintage & Heritage",
    subtitle: "Gold Digitals, Databank & Retro Classics",
    count: `${products.filter((p) => p.category === "Vintage").length} Models`,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    href: "#best-sellers",
  },
  {
    id: "calculators",
    name: "Scientific & Office",
    subtitle: "ClassWiz Genuine High-Res & Heavy Desk",
    count: `${products.filter((p) => p.category.includes("Calculators")).length} Models`,
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=800&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    href: "#new-arrivals",
  },
];
