import React, { useEffect, useState } from "react";

export const LuxuryLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if session has already seen loader
    const seen = sessionStorage.getItem("nme_loader_seen");
    if (seen) {
      setVisible(false);
      return;
    }

    const timer1 = setTimeout(() => {
      setFading(true);
    }, 900);

    const timer2 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("nme_loader_seen", "true");
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center text-white transition-opacity duration-700 pointer-events-none ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center px-4">
        {/* Monogram emblem */}
        <div className="w-16 h-16 mx-auto mb-6 border border-neutral-800 flex items-center justify-center relative">
          <div className="absolute inset-1 border border-neutral-800"></div>
          <span className="font-heading-luxury text-xl tracking-[0.2em] text-gilded">NM</span>
        </div>

        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400 font-medium mb-2">
          Horology Boutique · Saddar Karachi
        </p>
        <h1 className="text-xl sm:text-2xl font-heading-luxury uppercase tracking-[0.25em] text-white">
          New Madina Electronic
        </h1>

        <div className="w-32 h-[1px] bg-neutral-800 mx-auto mt-6 overflow-hidden relative">
          <div className="h-full bg-gilded w-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
