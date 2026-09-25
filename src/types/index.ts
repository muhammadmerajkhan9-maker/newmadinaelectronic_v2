export type Brand = "Casio" | "Seiko" | "Rado" | "Citizen" | "Curren" | "Naviforce" | "Q&Q";

export type Category =
  | "G-Shock"
  | "Edifice"
  | "Vintage"
  | "Analog"
  | "Digital"
  | "Scientific Calculators"
  | "Basic Calculators";

export type Gender = "Men" | "Women" | "Unisex";

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  model: string;
  reference?: string;
  image: string;
  lifestyleImage?: string;
  price: number; // in PKR
  was: number | null;
  originalPrice?: number; // in PKR
  category: Category;
  gender: Gender;
  warranty: string;
  series?: string;
  description?: string;
  specs?: {
    caseSize?: string;
    waterResistance?: string;
    glass?: string;
    movement?: string;
    batteryLife?: string;
    features?: string[];
  };
  inStock?: boolean;
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFlagship?: boolean;
  isTrending?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FaqItem {
  q: string;
  a: string;
  category?: string;
}
